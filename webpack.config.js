'use strict'

const path = require('path')
const webpack = require('webpack')

const __environment__ = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: '#eval-source-map',

  entry: './src/main.ts',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader',
          },
          esModule: true,
        }
      },
    ]
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  performance: {
    hints: false,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(__environment__),
    }),
  ]
}

if (__environment__ === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }))
  module.exports.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
  }))
}
