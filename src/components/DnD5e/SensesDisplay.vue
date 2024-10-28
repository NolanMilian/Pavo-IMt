<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/BaseComponents/DisplayBox.vue";
import HorizontalStat from "components/DnD5e/BaseComponents/HorizontalStat.vue";

export default defineComponent({
  name: "SensesDisplay",
  components: {HorizontalStat, DisplayBox},
  props: [''],
  data(){
    return{
      sensesData: [
        {label:'passive perception (wis)', score:'16'},
        {label:'passive investigation (int)', score:'17'},
        {label:'passive insight (wis)', score:'16'},
      ],
      extraSenseData : ['blindsight 30ft.'],
    }
  },
  computed: {
    extraSenses(){return null},
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
    <div class="sensesDisplay">
      <div class="topLabel text-center text-h7 text-bold">SENSES</div>
      <div class="q-gutter-sm q-px-md">
        <horizontal-stat class="stat" v-for="data in sensesData" :key="data.label" :label="data.label" :score="data.score" overall-width="225px"/>
      </div>
      <div class="extraSenses">{{ extraSenses }}</div>
    </div>
  </display-box>
</template>

<style scoped>

</style>
