<template>
  <q-page class="flex flex-center">
    <top-stat-bar-desktop/>
    <div class="stack row q-col-gutter-md">
      <div class="col q-gutter-md">
        <saving-throws/>
        <senses-display/>
        <proficiencies-languages-display/>
      </div>
      <div class="col">
        <skills-display/>
      </div>
      <div class="col-6 q-gutter-md">
        <second-stat-bar-desktop/>
        <ultra-display/>
      </div>
    </div>

<!--    <second-stat-bar-desktop/>-->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import SecondStatBarDesktop from "components/DnD5e/SecondStatBarDesktop.vue";
import SavingThrows from "components/DnD5e/SavingThrows.vue";
import SensesDisplay from "components/DnD5e/SensesDisplay.vue";
import ProficienciesLanguagesDisplay from "components/DnD5e/ProficienciesLanguagesDisplay.vue";
import SkillsDisplay from "components/DnD5e/SkillsDisplay.vue";
import UltraDisplay from "components/DnD5e/UltraDisplay.vue";
import TopStatBarDesktop from "components/DnD5e/TopStatBarDesktop.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {
    UltraDisplay,
    SkillsDisplay,
    ProficienciesLanguagesDisplay,
    SensesDisplay,
    SavingThrows,
    SecondStatBarDesktop,
    TopStatBarDesktop,
  },
})
</script>
<style scoped>
.stack{
  max-width: 1154px;
}
</style>
