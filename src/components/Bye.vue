<template lang="pug">
  p(@click="yell") Bye {{msg}}!
</template>

<script>
export default {
  data() {
    return {
      msg: "you"
    }
  },

  methods: {
    yell() {
      this.msg = this.msg + "!"
      this.mounted()
    },
    mounted() {
      alert(this.msg)
    }
  }
}
</script>