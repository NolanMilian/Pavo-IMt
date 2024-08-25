<script>
import {defineComponent} from 'vue'
import InspirationDisplay from "components/DnD5e/InspirationDisplay.vue";
import InitiativeStat from "components/DnD5e/InitiativeStat.vue";

export default defineComponent({
  name: "StackedInspirationInitiative",
  components: {InitiativeStat, InspirationDisplay},
  props: [''],
  data() {
    return {

    }
  },
  computed: {},
})
</script>

<template>
<div class="stacked">
  <inspiration-display />
  <initiative-stat />
</div>
</template>

<style scoped>
.stacked {
  width: 115px;
}
</style>
