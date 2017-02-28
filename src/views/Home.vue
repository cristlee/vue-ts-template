<template lang="pug">
  div
    hello
    bye
    br
    el-date-picker(
      v-model="date",
      type="date",
      placeholder="Kies een dag",
      format="dd-MM-yyyy",
      :picker-options="{firstDayOfWeek:1}"
    )
</template>

<script lang="ts">
import Hello from '../components/Hello.vue'
import Bye from '../components/Bye.vue'

@Component
export default class Home extends Vue {
  static components = { Hello, Bye }
  date = ""
}
</script>