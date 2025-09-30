<script>
import {defineComponent} from 'vue'
import ProficiencyBall from "components/DnD5e/BaseComponents/ProficiencyBall.vue";

export default defineComponent({
  name: "SkillsListItem",
  components: {ProficiencyBall},
  props: ['skillObj'],
})
</script>

<template>
<div class="skillsListItem row items-baseline q-gutter-sm">
  <div class="prof col-1 flex-center"><proficiency-ball :status="skillObj.prof" :custom="skillObj.profCustom"/></div>
  <div class="mod col-2">{{ skillObj.mod }}</div>
  <div class="skill col q-ml-none text-no-wrap">{{ skillObj.skill }}</div>
  <div class="status col-1 q-ml-none text-center">A</div>
  <div class="bonus col-1 q-mr-xs text-center">{{ skillObj.bonus }}</div>
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
