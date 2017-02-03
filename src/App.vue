<template lang="pug">
  div
    ul
      li: router-link(to="/") home
    
    router-view
</template>

<script lang="ts">
// import Hello from './components/Hello.vue'

@Component
export default class App extends Vue {
  // static components = { Hello }
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans')
  
  body
    font-family: "Open Sans"
    background-color #faa
</style>