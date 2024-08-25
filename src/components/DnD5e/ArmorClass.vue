<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ArmorClass",
  props: [''],
  data() {
    return {
      stat: 13,
    }
  },
  computed: {},
})
</script>

<template>
  <div class="armorClass">
    <div class="topLabel">ARMOR</div>
    <div class="armorClassScore">{{ stat }}</div>
    <div class="bottomLabel">CLASS</div>
  </div>
</template>

<style scoped>
.armorClass {
  width: 100px;
  height: 100px;
  text-align: center;
  border: #A90000 5px solid;
  border-radius: 10px;
}
.topLabel {
  padding-top: 10px;
  font-family: $stat-DnD5e-font-family;
  font-weight: bold;
  font-size: 14px;
}
.armorClassScore {
  font-size: x-large;
  margin: 2%;
}
.bottomLabel {
  bottom: auto;
  font-family: $stat-DnD5e-font-family;
  font-weight: bold;
  font-size: 14px;
}

</style>
