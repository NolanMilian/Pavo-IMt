<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HorizontalStat",
  props: ['score', 'label', 'overallWidth'],
})
</script>

<template>
<div class="horizontalStat row items-center" :style="{width: overallWidth}">
  <div class="score q-pl-sm text-bold">{{ score }}</div>
  <div class="label text-capitalize q-px-sm">{{ label }}</div>
</div>
</template>

<style scoped>
.horizontalStat {
  border-radius: 15px;
  background-color: #f6f6f6;
  height: 30px;
}
.score {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
}
.label {}
</style>
