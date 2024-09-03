<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AbilityStat",
  props: ['StatObj'],
  data() {
    return {
      label: 'constitution',
      score: 20,
      reverseScores: false
    }
  },
  computed: {
    capitalizeLabel() {
      return this.label.toUpperCase()
    },
    modifier() {
      let score = Math.floor((this.score - 10) / 2);
      return score > 0 ? '+ ' + score : score;
    },
  },
})
</script>

<template>
  <div class="statBlock">
    <div class="label">{{ capitalizeLabel }}</div>
    <div class="middleScore">{{ reverseScores ? score : modifier }}</div>
    <div class="bottomScore">{{ reverseScores ? modifier : score }}</div>
  </div>
</template>

<style scoped>
.statBlock {
  position: relative;
  width: 85px;
  min-width: 85px;
  max-width: 85px;
  height: 100px;
  text-align: center;
  border: #A90000 5px solid;
  border-radius: 10px;
}
.label {
  padding-top: 10px;
  font-family: $stat-DnD5e-font-family;
  font-size: 10px;
  opacity: 0.8;
}
.middleScore {
  font-size: x-large;
  margin: 5% 10%;
  border: #1D1D1D 1px solid;
  border-radius: 5px;
}
.bottomScore {
  background: white;
  border: #A90000 3px solid;
  border-radius: 50%;
  width: 65%;
  height: 35%;

  position: absolute;
  left: 50%;
  bottom: -10%;
  transform: translateX(-50%);
  display: block;
  align-self: flex-end;

  font-size: large;
}
</style>
