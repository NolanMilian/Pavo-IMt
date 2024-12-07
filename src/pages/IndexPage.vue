<template>
  <q-page class="flex flex-center">
<!--    <DnD5eLayout/>-->
    <div class="index text-h1 text-cyan text-bold">
      Welcome to TT Expansion!
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import DnD5eLayout from "components/DnD5e/DnD5eLayout.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {
    // DnD5eLayout,
  },
})
</script>
<style scoped>

</style>
