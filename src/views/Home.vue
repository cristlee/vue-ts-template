<template lang="pug">
  div
    hello(name="Evert", :fn="12")
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

@Component({ components: { Hello, Bye }})
export default class Home extends Vue {
  date = ""
}
</script>