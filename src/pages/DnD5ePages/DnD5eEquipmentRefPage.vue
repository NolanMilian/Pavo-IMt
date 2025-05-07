<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DnD5eEquipmentRefPage",
  data(){
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    const settings = {
      "url": "https://www.dnd5eapi.co/api/equipment",
      "method": "GET",
      "timeout": 0,
    };
    // let equipment;
    return{
      requestOptions,
      settings,
      responseData: {},
      equipment: [],
      item: {},
    }
  },
  methods: {
    async fetchResults(url,requestOptions) {
      let resultData;
      await fetch(url, requestOptions)
        .then( response => response.json() )
        .then( data => {
          resultData = data;
          // console.log('data: ',data);
        } )
        .catch( error => console.error('error', error) );
      return resultData;
    },
    returnEquipment(){
      this.fetchResults("https://www.dnd5eapi.co/api/equipment")
        .then(data => {this.equipment = data.results; console.log('Equipment: ',this.equipment)});
    },
    returnEquipmentItem(index){
      this.fetchResults(`https://www.dnd5eapi.co/api/equipment/${index}`)
        .then(data => {this.item = data; console.log('Equipment Item: ',this.item)});
    }
  },
  mounted() {

  }
});

</script>

<template>
<div class="equipment row items-start">
  <q-btn class="bg-primary text-white q-mr-xl" @click="returnEquipment">click me</q-btn>
  <div class="q-gutter-md col">
    <div class="" v-for="data in equipment" :key="data.index">
      <q-btn class="bg-primary text-white" @click="returnEquipmentItem(data.index)" :label="data.name"></q-btn>
    </div>
  </div>
  <div class="col">
    <div class="" v-for="object in item" :key="object.index">
      {{ object }}
    </div>
  </div>
</div>

</template>

<style scoped>

</style>
