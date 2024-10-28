<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/BaseComponents/DisplayBox.vue";

export default defineComponent({
  name: "MovementSpeed",
  components: {DisplayBox},
  props: [''],
  data() {
    return{
      movementType: 'WALKING',
      distance: 'ft.',
      speed: 30,
    }
  },
  computed: {
    capitalizeLabel() {
      return this.movementType.toUpperCase()
    },
  },
})
</script>

<template>
  <display-box
    box-width="100px"
    box-min-width="100px"
    box-max-width="100px"
    box-height="100px"
    box-min-height="100px"
    box-max-height="100px"
    style="text-align: center"
  >
    <div class="movementSpeed">
      <div class="movementTypeLabel">{{ capitalizeLabel }}</div>
      <span class="speedStat">{{ speed }}</span><span class="distance">{{ distance }}</span>
      <div class="speedLabel">SPEED</div>
    </div>
  </display-box>

</template>

<style scoped>
.movementSpeed {
  //width: 100px;
  //min-width: 100px;
  //max-width: 100px;
  //height: 100px;
  //text-align: center;
  //border: #A90000 5px solid;
  //border-radius: 10px;
}
.movementTypeLabel {
  padding-top: 10px;
  font-family: $stat-DnD5e-font-family;
  font-weight: bold;
  font-size: 14px;
}
.speedStat {
  font-size: x-large;
  margin: 2%;
}
.distance {
  font-family: $stat-DnD5e-font-family;
  font-size: large;
  opacity: 0.8;
}
.speedLabel {
  position: relative;
  bottom: -5px;
  font-family: $stat-DnD5e-font-family;
  font-weight: bold;
  font-size: 14px;
}
</style>
