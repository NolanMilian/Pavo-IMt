<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";

export default defineComponent({
  name: "ProficienciesLanguagesDisplay",
  components: {DisplayBox}
})
</script>

<template>
  <display-box
    box-width="300px"
    box-min-width="300px"
    box-max-width="300px"
    box-height="310px"
    box-min-height="310px"
    box-max-height="310px"
  >
    <div class="proficienciesLanguagesDisplay">
      <div class="prof"></div>
      <div class="prof"></div>
      <div class="prof"></div>
      <div class="lang"></div>
    </div>
  </display-box>
</template>

<style scoped>

</style>
