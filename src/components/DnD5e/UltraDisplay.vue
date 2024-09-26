<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";

export default defineComponent({
  name: "UltraDisplay",
  components: {DisplayBox}
})
</script>

<template>
  <display-box
    box-width="641px"
    box-min-width="641px"
    box-max-width="641px"
    box-height="555px"
    box-min-height="555px"
    box-max-height="555px"
  >
    <div class="ultraDisplay">

    </div>
  </display-box>
</template>

<style scoped>

</style>
