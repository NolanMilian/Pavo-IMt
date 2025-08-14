<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: "DnD5eDescriptionPage",
  props: ['id'],
  data() {
    return {
      userStore: useUserStore(),
      activeCharacter: {},
    }
  },
  methods: {
    async fetchResults(url, requestOptions) {
      let resultData;
      await fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
          resultData = data;
          // console.log('data: ',data);
        })
        .catch(error => console.error('error', error));
      return resultData;
    },
    returnBackgrounds() {
      this.fetchResults("https://www.dnd5eapi.co/api/backgrounds")
        .then(data => {
          this.races = data.results;
          this.stringOptions = this.races.map(r => r.name)
        });
    },
    returnRaceSubTypes(index) {
      this.fetchResults(`https://www.dnd5eapi.co/api/races/${index.toLowerCase()}/subraces`)
        .then(data => {
          //this.subRaces = data.subraces.map(s => s.name)
          this.subRaces = data.results.map(s => s.name)
        });
    },
    handleBlur() {
      this.returnRaceSubTypes(this.characterRace)
      if (this.subRaces.length === 0)
        this.update();
    },
    update() {
      if (this.subRaces.length !== 0)
        this.userStore.updateCharacterVariable(this.id, 'race', this.finalRace);
      else
        this.userStore.updateCharacterVariable(this.id, 'race', this.characterRace);
    },
    filterFn(val, update) {
      if (val === '') {
        update(() => {
          this.options = this.stringOptions
        })
        return
      }
      update(() => {
        const needle = val.toLowerCase()
        this.options = this.stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
  },
  mounted() {
    this.returnBackgrounds();
    this.activeCharacter = this.userStore.activeCharacter;
    this.characterRace = this.activeCharacter.race;
  },

})
</script>

<template>
<div class="flex flex-center">
  description
</div>
</template>

<style scoped>

</style>
