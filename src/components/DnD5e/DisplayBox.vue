<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DisplayBox",
  props: ['boxWidth', 'boxMinWidth', 'boxMaxWidth', 'boxHeight', 'boxMinHeight', 'boxMaxHeight'],
})
</script>

<template>
<div class="box"
     :style="{minWidth: boxMinWidth, maxWidth: boxMaxWidth, width: boxWidth, minHeight: boxMinHeight, maxHeight: boxMaxHeight, height: boxHeight}"
>
  <slot></slot>
</div>
</template>

<style scoped>
.box{
  //text-align: center;
  border: #A90000 5px solid;
  border-radius: 10px;
}
</style>
