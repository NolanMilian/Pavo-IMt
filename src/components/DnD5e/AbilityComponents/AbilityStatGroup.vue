<script>
import {defineComponent} from 'vue'
import AbilityStat from "components/DnD5e/AbilityComponents/AbilityStat.vue";
import {useCharacterStore} from "stores/character-store";

export default defineComponent({
  name: "AbilityStatGroup",
  props: ['statObj'],
  components: {AbilityStat},
  data() {
    return {
      userStore: useCharacterStore(),
      activeCharacter: {},
      abilityScores: {},
    }
  },
  mounted() {
    this.activeCharacter = this.userStore.activeCharacter
    if (this.activeCharacter.abilityScoresTotal) {
      this.abilityScores = this.activeCharacter.abilityScoresTotal
    } else if (this.activeCharacter.abilityScores) {
      this.abilityScores = this.activeCharacter.abilityScores.baseAbilityScores
    } else if (this.activeCharacter.abilities.totalScores){
      this.abilityScores = this.activeCharacter.abilities.totalScores
    } else {
      this.abilityScores = {str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10}
    }
    // console.log(this.abilityScores)
  },
})
</script>

<template>

  <!--    <div class="statGroups row q-col-gutter-md">-->
  <div class="statGroups row">
    <div class="split row q-gutter-md">
      <ability-stat class="col-4 col-md-3" label="strength" :score="abilityScores.str"/>
      <ability-stat class="col-4 col-md-3" label="dexterity" :score="abilityScores.dex"/>
      <ability-stat class="col-4 col-md-3" label="constitution" :score="abilityScores.con"/>
      <ability-stat class="col-4 col-md-3" label="intelligence" :score="abilityScores.int"/>
      <ability-stat class="col-4 col-md-3" label="wisdom" :score="abilityScores.wis"/>
      <ability-stat class="col-4 col-md-3" label="charisma" :score="abilityScores.cha"/>
    </div>
    <!--      <div class="statGroup1 row q-gutter-md">-->
    <!--        <ability-stat class="col strength" />-->
    <!--        <ability-stat class="col dexterity" />-->
    <!--        <ability-stat class="col constitution" />-->
    <!--      </div>-->
    <!--      <div class="statGroup2 row q-gutter-md">-->
    <!--        <ability-stat class="col intelligence" />-->
    <!--        <ability-stat class="col wisdom" />-->
    <!--        <ability-stat class="col charisma" />-->
    <!--      </div>-->
  </div>

</template>

<style scoped>
.statGroups {
  min-width: 303px;
}

.split {
  min-width: 303px;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
