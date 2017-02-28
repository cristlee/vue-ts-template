<template lang="pug">
  div
    ul
      li: router-link(to="/") home
    
    router-view
</template>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans')
  
  body
    font-family: "Open Sans"
    background-color #faa
</style>