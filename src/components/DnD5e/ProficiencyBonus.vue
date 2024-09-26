<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";

export default defineComponent({
  name: "ProficiencyBonus",
  components: {DisplayBox},
  props: [''],
  data() {
    return {
      level: 20
    }
  },
  computed: {
    score() {
      let score = Math.floor((this.level - 10) / 2);
      return score > 0 ? '+ ' + score : score;
    },
  }
})
</script>

<template>
  <display-box
    box-width="100px"
    box-min-width="100px"
    box-max-width="100px"
    box-height="100px"
    box-min-height="100px"
    box-max-height="100px"
    style="text-align: center"
  >
    <div class="proficiencyBonus">
      <div class="proficiencyLabel">PROFICIENCY</div>
      <div class="proficiencyScore">{{ score }}</div>
      <div class="bonusLabel">BONUS</div>
    </div>
  </display-box>
</template>

<style scoped>
.proficiencyBonus {}

.proficiencyLabel {
  padding-top: 10px;
  font-family: $stat-DnD5e-font-family;
  font-weight: bold;
  font-size: 14px;
}
.bonusLabel {
  font-family: $stat-DnD5e-font-family;
  font-weight: bold;
  font-size: 14px;
}
.proficiencyScore {
  font-size: x-large;
  margin: 2%;
}

</style>
