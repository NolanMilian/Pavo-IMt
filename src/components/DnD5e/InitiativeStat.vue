<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "InitiativeStat",
  props: [''],
  data(){
    return {
      stat: '+3'
    }
  },
})
</script>

<template>
<div class="initiativeStat">
  <div class="topLabel">INITIATIVE</div>
  <div class="initiativeStatScore">{{ stat }}</div>
</div>
</template>

<style scoped>
.initiativeStat {
  width: 115px;
  height: 50px;
  text-align: center;
  border: #A90000 5px solid;
  border-radius: 25px;
}
.topLabel {
  font-family: $stat-DnD5e-font-family;
  font-weight: bold;
  font-size: 14px;
}
.initiativeStatScore {
  font-size: 14px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
  border: #1D1D1D 1px solid;
  border-radius: 5px;
  transform: translateY(-5px);
}
</style>
