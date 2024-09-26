<script>
import {defineComponent} from 'vue'
import ProficiencyBonus from "components/DnD5e/ProficiencyBonus.vue";
import StackedInspirationInitiative from "components/DnD5e/StackedInspirationInitiative.vue";
import DefensesConditionsDisplay from "components/DnD5e/DefensesConditionsDisplay.vue";

export default defineComponent({
  name: "SecondStatBarDesktop",
  components: {DefensesConditionsDisplay, StackedInspirationInitiative, ProficiencyBonus}
})
</script>

<template>
  <div class="q-gutter-md row items-end secondStatBarDesktop">
    <proficiency-bonus/>
    <stacked-inspiration-initiative/>
    <defenses-conditions-display/>
  </div>
</template>

<style scoped>
.secondStatBarDesktop {
  min-width: 645px;
}

</style>
