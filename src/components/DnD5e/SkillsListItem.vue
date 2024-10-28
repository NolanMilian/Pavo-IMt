<script>
import {defineComponent} from 'vue'
import ProficiencyBall from "components/DnD5e/BaseComponents/ProficiencyBall.vue";

export default defineComponent({
  name: "SkillsListItem",
  components: {ProficiencyBall},
  props: ['prof', 'profCustom', 'mod', 'skill', 'bonus'],
  // data(){
  //   return{
  //     skillsData: {prof: 'not_proficient', profCustom: false, mod: 'wis', skill:'Animal Handling', bonus: '+3'}
  //   }
  // },
})
</script>

<template>
<div class="skillsListItem row items-baseline q-gutter-sm">
  <div class="prof col-1 flex-center"><proficiency-ball :status="prof" :custom="profCustom"/></div>
  <div class="mod col-2">{{ mod }}</div>
  <div class="skill col q-ml-none">{{ skill }}</div>
  <div class="bonus col-1 q-mr-xs text-center">{{ bonus }}</div>
</div>
</template>

<style scoped>
.skillsListItem {
  height: 40px;
}
.prof {

}
.mod {
  text-transform: uppercase;
}
.skill {

}
.bonus {
  background-color: white;
  border: black 1px solid;
  width: 35px;
  height: 25px;
  border-radius: 10px;
}
</style>
