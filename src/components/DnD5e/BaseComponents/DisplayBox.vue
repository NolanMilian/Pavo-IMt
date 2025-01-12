<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DisplayBox",
  props: ['boxWidth', 'boxMinWidth', 'boxMaxWidth', 'boxHeight', 'boxMinHeight', 'boxMaxHeight', 'borderRad', 'borderColor', 'bgColor'],
})
</script>

<template>
<div class="box"
     :style="{
  minWidth: boxMinWidth,
  maxWidth: boxMaxWidth,
  width: boxWidth,
  minHeight: boxMinHeight,
  maxHeight: boxMaxHeight,
  height: boxHeight,
  borderRadius: borderRad,
  borderColor: borderColor,
  background: bgColor
}"
>
  <slot></slot>
</div>
</template>

<style scoped>
.box{
  border: #A90000 5px solid;
  border-radius: 10px;
  background: lightgray;
}
</style>
