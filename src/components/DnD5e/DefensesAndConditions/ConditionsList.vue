<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ConditionsList",
  props: [''],
  data(){
    return{
      conditions: ['Blinded', 'Deafened'],
    }
  },
  computed: {
    conditionsList(){
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.conditions.sort((a,b) => a.resistance > b.resistance ? 1 : -1).join(', ');
    }
  },
})
</script>

<template>
  <div class="conditionsList ">
    <div class="topLabel text-bold text-left">CONDITIONS</div>
    <div class="conditionsList">{{ conditionsList }}</div>
  </div>
</template>

<style scoped>
.conditionsList {
  //max-width: 125px;
}
</style>
