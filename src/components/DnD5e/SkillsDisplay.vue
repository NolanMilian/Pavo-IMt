<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";

export default defineComponent({
  name: "SkillsDisplay",
  components: {DisplayBox}
})
</script>

<template>
  <display-box
    box-width="235px"
    box-min-width="235px"
    box-max-width="235px"
    box-height="692px"
    box-min-height="692px"
    box-max-height="692px"
  >
    <div class="skillsDisplay">
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
      <div class="skill"></div>
    </div>
  </display-box>
</template>

<style scoped>

</style>
