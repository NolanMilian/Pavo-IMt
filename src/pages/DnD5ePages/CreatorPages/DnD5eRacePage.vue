<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: "DnD5eRacePage",
  props: ['id'],
  data() {
    return {
      userStore: useUserStore(),
      activeCharacter: {},
      races: [],
      subRaces: [],
      characterRace: '',
      finalRace: '',
      stringOptions: [
        'Aarakocra',
        'Dragonborn',
        'Hill Dwarf',
        'Mountain Dwarf',
        'High Elf',
        'Wood Elf',
        'Eladrin Elf',
        'Air Genasi',
        'Earth Genasi',
        'Fire Genasi',
        'Water Genasi',
        'Rock Gnome',
        'Deep Gnome',
        'Goliath',
        'Half-Elf',
        'Half-Orc',
        'Lightfoot Halfling',
        'Stout Halfling',
        'Human',
        'Human Variant',
        'Tiefling',
        'Variant Aasimar',
      ],
      options: this.stringOptions,
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
    returnRaces() {
      this.fetchResults("https://www.dnd5eapi.co/api/races")
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
    this.returnRaces();
    this.activeCharacter = this.userStore.activeCharacter;
    this.characterRace = this.activeCharacter.race;
  },
})
</script>

<template>
  <div class="flex flex-center q-gutter-md">
    <div class="characterRace column">
      <span class="label text-h6">
        <strong>Character Race</strong>
      </span>
      <!--      <q-input standout debounce="500" v-model="characterRace" @blur="update" style="width: 300px"/>-->
      <q-select
        v-model="characterRace"
        :options="options"
        behavior="menu"
        filled
        input-debounce="0"
        label="Race"
        style="width: 250px"
        use-input
        @blur="handleBlur"
        @filter="filterFn"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
    <div v-if="subRaces.length>0" class="characterRace column">
      <span class="label text-h6">
        <strong>Character Sub-Race</strong>
      </span>
      <q-select
        v-model="finalRace"
        :options="subRaces"
        behavior="menu"
        filled
        input-debounce="0"
        label="Race"
        style="width: 250px"
        use-input
        @blur="update"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<style scoped>

</style>
