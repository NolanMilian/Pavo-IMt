<script>
import {defineComponent} from 'vue'
import HealthTrackerDesktop from "components/DnD5e/HealthTrackerDesktop.vue";
import AbilityStatGroup from "components/DnD5e/AbilityStatGroup.vue";
import MovementSpeed from "components/DnD5e/MovementSpeed.vue";
import ArmorClass from "components/DnD5e/ArmorClass.vue";

export default defineComponent({
  name: "TopStatBarDesktop",
  components: {ArmorClass, MovementSpeed, AbilityStatGroup, HealthTrackerDesktop}
})
</script>

<template>
  <div class="q-gutter-md row items-end sized">
    <health-tracker-desktop class="col q-mr-md"/>
    <ability-stat-group class="col"/>
    <movement-speed class="col"/>
    <armor-class class="col"/>
  </div>
</template>

<style scoped>
@media (max-width: 1200px) {
  .sized {
    transform: scale(85%);
  }
}
</style>
