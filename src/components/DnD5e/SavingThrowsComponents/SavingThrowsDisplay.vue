<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/BaseComponents/DisplayBox.vue";
import SavingThrowItem from "components/DnD5e/SavingThrowsComponents/SavingThrowItem.vue";

export default defineComponent({
  name: "SavingThrows",
  components: {SavingThrowItem, DisplayBox},
  // props: ['savingThrowData', 'advantagesData'],
  data(){
    return{
      savingThrowData: [
        {label:'strength', score:'+0', proficiencyStatus: 'not_proficient', proficiencyCustom: false},
        {label:'intelligence', score:'+7', proficiencyStatus: 'proficient', proficiencyCustom: false},
        {label:'dexterity', score:'+3', proficiencyStatus: 'not_proficient', proficiencyCustom: false},
        {label:'wisdom', score:'+11', proficiencyStatus: 'expertise', proficiencyCustom: true},
        {label:'constitution', score:'+3', proficiencyStatus: 'not_proficient', proficiencyCustom: false},
        {label:'charisma', score:'+0', proficiencyStatus: 'not_proficient', proficiencyCustom: false},
      ],
      advantagesData: ['against being charmed'],
    }
  },
  computed: {
    advantages() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.advantagesData.sort((a,b) => a > b ? 1 : -1).join(', ');
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
      <div class="topLabel text-center text-h7 text-bold">SAVING THROWS</div>
      <div class="row q-gutter-xs q-pl-md items-center">
        <saving-throw-item class="savingThrowItem" v-for="data in savingThrowData" :saving-throw-obj="data" :key="data.label"/>
      </div>
      <div class="advantages q-px-sm q-pt-sm q-mr-xs row">
        <div class="advantagesIcon col-1 q-mr-xs">A <q-tooltip>Advantage</q-tooltip></div>
        <div class="advantagesList col">{{ advantages }}</div>
      </div>
    </div>
  </display-box>
</template>

<style scoped>
.advantages {

}
.advantagesIcon {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  text-align: center;
  align-self: center;
  font-size: 12px;
  background-color: #21BA45;
}

</style>
