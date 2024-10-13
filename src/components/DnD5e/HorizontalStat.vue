<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HorizontalStat",
  props: ['score', 'label'],
})
</script>

<template>
<div class="horizontalStat row items-center">
  <div class="score q-pl-sm text-bold">{{ score }}</div>
  <div class="label text-capitalize q-px-sm">{{ label }}</div>
</div>
</template>

<style scoped>
.horizontalStat {
  border-radius: 15px;
  //border: #C10015 1px solid;
  background-color: #f6f6f6;
  max-width: 125px;
  min-width: 125px;
  width: 100%;
  height: 30px;
}
.score {
  //background-color: #C10015;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
}
.label {}
</style>
