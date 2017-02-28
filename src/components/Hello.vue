<template lang="pug">
  div
    p(@click="increment") Your count is {{ count }}
</template>

<script lang="ts">
@Component
export default class Hello extends Vue {
  @state count: number
  @mutation increment: Function
}
</script>