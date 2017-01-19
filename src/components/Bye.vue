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
    }
  },

  mounted() {
    this.$http.get('/index.html').then( ({data}) => console.log(data) )
  }
}
</script>