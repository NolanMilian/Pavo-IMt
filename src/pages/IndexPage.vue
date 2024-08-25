<template>
  <q-page class="flex flex-center">
    <ability-stat-group></ability-stat-group>
    <proficiency-bonus></proficiency-bonus>
    <movement-speed></movement-speed>
    <armor-class></armor-class>
<!--    <inspiration-display></inspiration-display>-->
<!--    <initiative-stat></initiative-stat>-->
    <stacked-inspiration-initiative/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import AbilityStat from "components/DnD5e/AbilityStat.vue";
import AbilityStatGroup from "components/DnD5e/AbilityStatGroup.vue";
import ProficiencyBonus from "components/DnD5e/ProficiencyBonus.vue";
import MovementSpeed from "components/DnD5e/MovementSpeed.vue";
import ArmorClass from "components/DnD5e/ArmorClass.vue";
import InspirationDisplay from "components/DnD5e/InspirationDisplay.vue";
import InitiativeStat from "components/DnD5e/InitiativeStat.vue";
import StackedInspirationInitiative from "components/DnD5e/StackedInspirationInitiative.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {
    StackedInspirationInitiative,
    // InitiativeStat,
    // InspirationDisplay,
    ArmorClass,
    MovementSpeed,
    ProficiencyBonus,
    AbilityStatGroup
  },
})
</script>
