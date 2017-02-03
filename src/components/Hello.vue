<template lang="pug">
  div
    h1 Hello {{name}}!
    //- p(@click="increment") Your count is {{ count }}
</template>

<script lang="ts">
function someFunction(): number {console.log('side effect'); return 123;}
function resultOf<T>(fn: () => T): T {
  return undefined as any
}

@Component
export default class Hello extends Vue {
  @prop name: string
  @prop fn = resultOf(someFunction)
  // @state count: number
  // @mutation increment: Function
}
</script>