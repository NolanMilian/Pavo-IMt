<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";

export default defineComponent({
  name: "HealthTrackerDesktop",
  components: {DisplayBox},
  props: [''],
  data(){
    return {
      current: 93,
      max: 93,
      temp: 0
    }
  },
  computed: {
    tempHealth() {return this.temp === 0 ? '--' : this.temp}
  }
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
    style="text-align: center"
  >
    <div class="healthTracker">
      <span class="healthLabel">HEALTH</span>
      <div class="row items-center">
        <div class="healthInputGroup q-ma-none q-pa-none col-4">
          <input class="healthInput" type="number">
          <!--        <q-input type="number" class="healthInput" input-class="healthInput" filled></q-input>-->
          <q-btn class="heal" size="10px" padding="none" color="green">HEAL</q-btn>
          <q-btn class=" damage" size="10px" padding="none" color="red">DAMAGE</q-btn>
        </div>
        <div class="displays row col-8">
          <div class="currentHealth col">
            <div class="label">CURRENT</div>
            <div class="value">{{ current }}</div>
          </div>
          <div class="slash q-ma-none q-pa-none">/</div>
          <div class="maxHealth col">
            <div class="label">MAX</div>
            <div class="value">{{ max }}</div>
          </div>
          <div class="tempHealth col">
            <div class="label">TEMP</div>
            <div class="value">{{ tempHealth }}</div>
          </div>
        </div>
      </div>
    </div>
  </display-box>


</template>

<style scoped>
.healthTracker {}

.healthLabel {
  font-family: $stat-DnD5e-font-family;
  font-weight: bold;
  font-size: 14px;
}


.healthInputGroup {

}
.healthInput {
  width: 75px;
  height: 25px;
}
.heal {
  height: 15px;
  width: 75px;
}
.damage {
  height: 15px;
  width: 75px;
}

.value {
  font-size: x-large;
}

.label {}


.currentHealth {
  .label {
    font-size: 14px;
  }
}


.slash {
  font-size: 35px;
}

.maxHealth {

}


.tempHealth {
  //max-width: 50px;

}
</style>
