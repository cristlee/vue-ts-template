<template lang="pug">
  div
    h1 Hello {{name}}!
    p(@click="increment") Your count is {{ count }}
</template>

<script lang="ts">
@Component
export default class Hello extends Vue {
  @prop(String) name: string
  @state('count') count: number
  @mutation('increment') increment: Function
}
</script>