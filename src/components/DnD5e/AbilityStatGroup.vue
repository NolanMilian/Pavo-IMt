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

})
</script>

<template>
  <q-page-container>
    <div class="statGroup row q-gutter-sm">
      <ability-stat class="col" />
      <ability-stat class="col" />
      <ability-stat class="col" />
      <ability-stat class="col" />
      <ability-stat class="col" />
      <ability-stat class="col" />
    </div>
  </q-page-container>
</template>

<style scoped>
.statGroup {

}
</style>
