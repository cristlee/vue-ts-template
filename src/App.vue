<template lang="pug">
  div
    ul
      li: router-link(to="/") home
    
    router-view
</template>

<script lang="ts">
@Component
export default class App extends Vue {}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans')
  
  body
    font-family: "Open Sans"
    background-color #faa
</style>