<template>
  <q-page class="flex flex-center">
    <div class="stack row q-col-gutter-md">
      <top-stat-bar-desktop class=""/>
      <div class="col-4 q-gutter-md leftCol">
        <saving-throws/>
        <senses-display/>
        <proficiencies-languages-display/>
      </div>
      <div class="col q-px-none q-mx-none centerCol">
        <skills-display class="q-mr-none"/>
      </div>
      <div class="col-6 rightCol q-pl-none">
        <second-stat-bar-desktop class="q-mb-md"/>
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
import UltraDisplay from "components/DnD5e/UltraDisplay/UltraDisplay.vue";
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
.leftCol {
  width: 348px;
}
.centerCol {
  width: 400px;
}
.rightCol {

}
</style>
