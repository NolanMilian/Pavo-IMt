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
    }
  },
  methods: {
    update(){
      this.userStore.updateCharacterVariable(this.id, 'race', this.characterRace);
    }
  },
  mounted() {
    this.activeCharacter = this.userStore.activeCharacter;
    this.characterRace = this.activeCharacter.race
    console.log('Character ID: ', this.id)
  }
})
</script>

<template>
  <div class="flex flex-center">
    <div class="characterRace column">
      <span class="label text-h6">
        <strong>Character Race</strong>
      </span>
      <q-input standout debounce="500" v-model="characterRace" @blur="update" style="width: 300px"/>
      <!--      {{ characterName }}-->
    </div>
  </div>
</template>

<style scoped>

</style>
