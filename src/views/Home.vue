<template lang="pug">
  div
    hello(name="Evert")
    bye
</template>

<script lang="ts">
import Hello from '../components/Hello.vue'
import Bye from '../components/Bye.vue'

@Component({ components: { Hello, Bye }})
export default class Home extends Vue {}
</script>