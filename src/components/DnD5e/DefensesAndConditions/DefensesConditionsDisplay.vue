<script>
import {defineComponent} from 'vue'
import DefensesList from "components/DnD5e/DefensesAndConditions/DefensesList.vue";
import ConditionsList from "components/DnD5e/DefensesAndConditions/ConditionsList.vue";
import DisplayBox from "components/DnD5e/BaseComponents/DisplayBox.vue";

export default defineComponent({
  name: "DefensesConditionsDisplay",
  components: {DisplayBox, ConditionsList, DefensesList}
})
</script>

<template>
  <display-box
  box-width="382px"
  box-min-width="382px"
  box-max-width="382px"
  box-height="100px"
  box-min-height="100px"
  box-max-height="100px"
  >
    <div class="defensesConditionsDisplay row">
      <defenses-list class="col"/>
      <div class="pipe col-1 text-center">|</div>
      <conditions-list class="col"/>
    </div>
  </display-box>
</template>

<style scoped>
.defensesConditionsDisplay {}


.pipe {
  font-size: 70px;
  font-weight: lighter;
}
</style>
