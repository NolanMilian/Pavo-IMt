<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "InspirationDisplay",
  props: [''],
  data() {
    return{

    }
  },
})
</script>

<template>
<div class="inspirationDisplay">
  <div class="topLabel">INSPIRATION</div>
  <q-icon class="inspirationIcon" name="wb_twilight" />
</div>
</template>

<style scoped>
.inspirationDisplay {
  width: 115px;
  height: 50px;
  text-align: center;
  border: #A90000 5px solid;
  border-radius: 25px;
  background-color: lightgray;
}
.topLabel {
  font-family: $stat-DnD5e-font-family;
  font-weight: bold;
  font-size: 14px;
}
.inspirationIcon {
  color: #c33132;
  font-size: 24px;
  bottom: 5px;
}
</style>
