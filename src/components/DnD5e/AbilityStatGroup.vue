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
<!--  <q-page>-->
    <div class="statGroups row q-col-gutter-md">
<!--      <div class="split row q-gutter-md">-->
<!--        <ability-stat class="col-12 col-md" />-->
<!--        <ability-stat class="col-12 col-md" />-->
<!--        <ability-stat class="col-12 col-md" />-->
<!--        <ability-stat class="col-12 col-md" />-->
<!--        <ability-stat class="col-12 col-md" />-->
<!--        <ability-stat class="col-12 col-md" />-->
<!--      </div>-->
      <div class="statGroup1 row q-gutter-md">
        <ability-stat class="col strength" />
        <ability-stat class="col dexterity" />
        <ability-stat class="col constitution" />
      </div>
      <div class="statGroup2 row q-gutter-md">
        <ability-stat class="col intelligence" />
        <ability-stat class="col wisdom" />
        <ability-stat class="col charisma" />
      </div>
    </div>


<!--  </q-page>-->
</template>

<style scoped>
.statGroups {
  min-width: 303px;
}

.split {
  min-width: 303px;
  :nth-last-child(-n+3) {
    background: #9C27B0;
  }
}

</style>
