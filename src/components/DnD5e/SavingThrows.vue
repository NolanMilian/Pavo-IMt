<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";
import HorizontalStat from "components/DnD5e/HorizontalStat.vue";

export default defineComponent({
  name: "SavingThrows",
  components: {HorizontalStat, DisplayBox},
  data(){
    return{
      savingThrowData: [
        {label:'strength', score:'+0'},
        {label:'intelligence', score:'+7'},
        {label:'dexterity', score:'+3'},
        {label:'wisdom', score:'+11'},
        {label:'constitution', score:'+3'},
        {label:'charisma', score:'+0'},
      ],
    }
  },
})
</script>

<template>
  <display-box
    box-width="300px"
    box-min-width="300px"
    box-max-width="300px"
    box-height="175px"
    box-min-height="175px"
    box-max-height="175px"
  >
    <div class="savingThrows">
      <div class="topLabel text-center text-h7">SAVING THROWS</div>
      <div class="row q-gutter-sm q-px-md">
        <horizontal-stat class="stat" v-for="data in savingThrowData" :key="data.label" :label="data.label" :score="data.score"/>
      </div>
    </div>
  </display-box>
</template>

<style scoped>
</style>
