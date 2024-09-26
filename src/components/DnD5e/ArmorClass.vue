<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";

export default defineComponent({
  name: "ArmorClass",
  components: {DisplayBox},
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
  <display-box
    box-width="100px"
    box-min-width="100px"
    box-max-width="100px"
    box-height="100px"
    box-min-height="100px"
    box-max-height="100px"
    style="text-align: center"
  >
    <div class="armorClass">
      <div class="topLabel">ARMOR</div>
      <div class="armorClassScore">{{ stat }}</div>
      <div class="bottomLabel">CLASS</div>
    </div>
  </display-box>
</template>

<style scoped>
.armorClass {}
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
