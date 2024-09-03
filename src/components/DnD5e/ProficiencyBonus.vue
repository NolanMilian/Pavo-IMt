<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ProficiencyBonus",
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
  <div class="proficiencyBonus">
    <div class="proficiencyLabel">PROFICIENCY</div>
    <div class="proficiencyScore">{{ score }}</div>
    <div class="bonusLabel">BONUS</div>
  </div>
</template>

<style scoped>
.proficiencyBonus {
  width: 100px;
  min-width: 100px;
  max-width: 100px;
  height: 100px;
  text-align: center;
  border: #A90000 5px solid;
  border-radius: 10px;
}
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
