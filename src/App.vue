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
  body
    background-color #faa
</style>