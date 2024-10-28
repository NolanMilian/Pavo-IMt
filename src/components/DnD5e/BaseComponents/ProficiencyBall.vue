<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ProficiencyBall",
  props: ['status', 'custom'],
})
</script>

<template>
<div class="proficiencyBall"></div>
  <q-icon v-if="status==='not_proficient'" class="icon notProficient" name="brightness_1" :color="custom ? 'blue' : 'white' " style="border-radius: 50%; border: black 1px dashed" />
  <q-icon v-if="status==='half_proficient'" class="icon halfProficient" name="brightness_medium" :color="custom ? 'blue' : 'black' " />
  <q-icon v-if="status==='proficient'" class="icon proficient" name="brightness_low" :color="custom ? 'blue' : 'black' " />
  <q-icon v-if="status==='expertise'" class="icon expertise" name="brightness_high" :color="custom ? 'blue' : 'black' " />
</template>

<style scoped>
.proficiencyBall {
  height: 10px;
  width: 10px;
}
.notProficient {

}
.halfProficient {

}
.proficient {

}
.expertise {

}
.icon {
  font-size: 15px;
  color: black;
}
</style>
