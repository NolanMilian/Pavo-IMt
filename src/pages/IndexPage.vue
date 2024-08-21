<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <ability-stat-group></ability-stat-group>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
// import AbilityStat from "components/DnD5e/AbilityStat.vue";
import AbilityStatGroup from "components/DnD5e/AbilityStatGroup.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {
    // AbilityStat,
    AbilityStatGroup
  },
})
</script>
