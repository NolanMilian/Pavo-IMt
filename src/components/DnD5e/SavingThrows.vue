<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";

export default defineComponent({
  name: "SavingThrows",
  components: {DisplayBox}
})
</script>

<template>
  <display-box
    box-width="300px"
    box-min-width="300px"
    box-max-width="300px"
    box-height="175px"
    box-min-height="175px"
    box-max-height="175px"
  >
    <div class="savingThrows">
      <div class="stat"></div>
      <div class="stat"></div>
      <div class="stat"></div>
      <div class="stat"></div>
      <div class="stat"></div>
      <div class="stat"></div>
    </div>
  </display-box>
</template>

<style scoped>

</style>
