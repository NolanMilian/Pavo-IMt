<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: "DnD5eRacePage",
  props: ['id'],
  data(){
    return{
      userStore: useUserStore(),
      activeCharacter: {},
      characterRace: '',
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
    update(){
      this.userStore.updateCharacterVariable(this.id, 'race', this.characterRace);
    },
    filterFn (val, update) {
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
    this.activeCharacter = this.userStore.activeCharacter;
    this.characterRace = this.activeCharacter.race;
    // console.log('Character ID: ', this.id);
  },
  computed: {

  },
  beforeUnmount() {

  }
})
</script>

<template>
  <div class="flex flex-center">
    <div class="characterRace column">
      <span class="label text-h6">
        <strong>Character Race</strong>
      </span>
<!--      <q-input standout debounce="500" v-model="characterRace" @blur="update" style="width: 300px"/>-->
      <q-select
        filled
        v-model="characterRace"
        use-input
        input-debounce="0"
        label="Race"
        :options="options"
        @filter="filterFn"
        style="width: 250px"
        behavior="menu"
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
