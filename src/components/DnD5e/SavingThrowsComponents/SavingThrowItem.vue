<script>
import {defineComponent} from 'vue'
import HorizontalStat from "components/DnD5e/BaseComponents/HorizontalStat.vue";
import ProficiencyBall from "components/DnD5e/BaseComponents/ProficiencyBall.vue";

export default defineComponent({
  name: "SavingThrowItem",
  components: {ProficiencyBall, HorizontalStat},
  props: ['savingThrowObj'],
})
</script>

<template>
  <div class="savingThrowItem row inline items-center no-wrap">
    <div class="proficiencyBall">
      <proficiency-ball class="proficiencyBall" :status="savingThrowObj.proficiencyStatus" :custom="savingThrowObj.proficiencyCustom" />
    </div>
    <horizontal-stat class="horizontalStat" :score="savingThrowObj.score" :label="savingThrowObj.label" overall-width="125px"/>
  </div>
</template>

<style scoped>
.savingThrowItem {
  width: 135px;
  height: 30px;
  position: relative;
}
.horizontalStat {
  //width: 125px;
}
.proficiencyBall {
  position: absolute;
  left: -8px;
  top: -25%;
}
</style>
