<script>
import {defineComponent} from 'vue'
import AbilityStat from "components/DnD5e/AbilityStat.vue";

export default defineComponent({
  name: "AbilityStatGroup",
  props: [''],
  components: {AbilityStat},
  data() {
    return{

    }
  },
  computed: {},
  methods: {},

})
</script>

<template>

<!--    <div class="statGroups row q-col-gutter-md">-->
    <div class="statGroups row">
      <div class="split row q-gutter-md">
        <ability-stat class="col-4 col-md-3" />
        <ability-stat class="col-4 col-md-3" />
        <ability-stat class="col-4 col-md-3" />
        <ability-stat class="col-4 col-md-3" />
        <ability-stat class="col-4 col-md-3" />
        <ability-stat class="col-4 col-md-3" />
      </div>
<!--      <div class="statGroup1 row q-gutter-md">-->
<!--        <ability-stat class="col strength" />-->
<!--        <ability-stat class="col dexterity" />-->
<!--        <ability-stat class="col constitution" />-->
<!--      </div>-->
<!--      <div class="statGroup2 row q-gutter-md">-->
<!--        <ability-stat class="col intelligence" />-->
<!--        <ability-stat class="col wisdom" />-->
<!--        <ability-stat class="col charisma" />-->
<!--      </div>-->
    </div>

</template>

<style scoped>
.statGroups {
  min-width: 303px;
}

.split {
  min-width: 303px;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
