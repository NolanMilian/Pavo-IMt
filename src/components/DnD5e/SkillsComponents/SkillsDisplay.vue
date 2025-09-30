<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/BaseComponents/DisplayBox.vue";
import SkillsListItem from "components/DnD5e/SkillsComponents/SkillsListItem.vue";

export default defineComponent({
  name: "SkillsDisplay",
  components: {SkillsListItem, DisplayBox},
  data() {
    return {
    skillsData: [
      {prof: 'not_proficient', profCustom: false, mod: 'dex', skill:'Acrobatics', bonus: '+3'},
      {prof: 'not_proficient', profCustom: false, mod: 'wis', skill:'Animal Handling', bonus: '+1'},
      {prof: 'expertise', profCustom: true, mod: 'int', skill:'Arcana', bonus: '+15'},
      {prof: 'not_proficient', profCustom: false, mod: 'str', skill:'Athletics', bonus: '+0'},
      {prof: 'not_proficient', profCustom: false, mod: 'cha', skill:'Deception', bonus: '+0'},
      {prof: 'not_proficient', profCustom: false, mod: 'int', skill:'History', bonus: '+10'},
      {prof: 'not_proficient', profCustom: false, mod: 'wis', skill:'Insight', bonus: '+6'},
      {prof: 'not_proficient', profCustom: false, mod: 'cha', skill:'Intimidation', bonus: '+0'},
      {prof: 'not_proficient', profCustom: false, mod: 'int', skill:'Investigation', bonus: '+7'},
      {prof: 'not_proficient', profCustom: false, mod: 'wis', skill:'Medicine', bonus: '+1'},
      {prof: 'not_proficient', profCustom: false, mod: 'int', skill:'Nature', bonus: '+5'},
      {prof: 'not_proficient', profCustom: false, mod: 'wis', skill:'Perception', bonus: '+6'},
      {prof: 'not_proficient', profCustom: false, mod: 'cha', skill:'Performance', bonus: '+0'},
      {prof: 'not_proficient', profCustom: false, mod: 'cha', skill:'Persuasion', bonus: '+0'},
      {prof: 'not_proficient', profCustom: false, mod: 'int', skill:'Religion', bonus: '+5'},
      {prof: 'not_proficient', profCustom: false, mod: 'dex', skill:'Slight of Hand', bonus: '+3'},
      {prof: 'not_proficient', profCustom: false, mod: 'dex', skill:'Stealth', bonus: '+3'},
      {prof: 'not_proficient', profCustom: false, mod: 'wis', skill:'Survival', bonus: '+1'}
    ],
    }
  },
})
</script>

<template>
  <display-box
    box-width="265px"
    box-min-width="265px"
    box-max-width="265px"
    box-height="692px"
    box-min-height="692px"
    box-max-height="692px"
  >
    <div class="skillsDisplay">
      <div class="topLabel text-center text-h7 text-bold">SKILLS</div>
      <div class="secondLabel row q-px-sm">
        <div class="prof col-2">PROF<q-tooltip>Proficiency</q-tooltip></div>
        <div class="mod col-2">MOD<q-tooltip>Modifier</q-tooltip></div>
        <div class="skill col">SKILL</div>
        <div class="status col"></div>
        <div class="bonus col-2">BONUS</div>
      </div>
      <skills-list-item
        class="skillsList q-pl-sm"
        v-for="data in skillsData"
        :key="data.skill"
        :skill-obj="data"
      />
    </div>
  </display-box>
</template>

<style scoped>
.skillsDisplay {
}
.secondLabel {
  font-size: 10px;
}
.skillsList {

}
</style>
