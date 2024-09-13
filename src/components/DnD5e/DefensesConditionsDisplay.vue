<script>
import {defineComponent} from 'vue'
import DefensesList from "components/DnD5e/DefensesList.vue";
import ConditionsList from "components/DnD5e/ConditionsList.vue";
import DisplayBox from "components/DnD5e/DisplayBox.vue";

export default defineComponent({
  name: "DefensesConditionsDisplay",
  components: {DisplayBox, ConditionsList, DefensesList}
})
</script>

<template>
  <display-box
  box-width="300px"
  box-min-width="300px"
  box-max-width="300px"
  box-height="100px"
  box-min-height="100px"
  box-max-height="100px"
  >
    <div class="defensesConditionsDisplay row">
      <defenses-list/>
      <div class="pipe">|</div>
      <conditions-list/>
    </div>
  </display-box>
</template>

<style scoped>
.defensesConditionsDisplay {
  width: 382px;
  height: 100px;
}


.pipe {
  font-size: 70px;
  font-weight: lighter;
}
</style>
