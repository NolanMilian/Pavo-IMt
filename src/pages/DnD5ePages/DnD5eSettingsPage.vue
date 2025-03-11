<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: "DnD5eSettingsPage",
  props: ['id'],
  data() {
    return {
      userStore: useUserStore(),
      activeCharacter: {},
      characterName: '',

    }
  },
  methods: {
    update(){
      if (this.characterName)
        this.userStore.updateCharacterVariable(this.id, 'name', this.characterName)
    }

  },
  updated() {


  },

  beforeUnmount() {

  },
  mounted() {
    // this.userStore.activateCharacter(this.id);
    this.activeCharacter = this.userStore.activeCharacter;
    this.characterName = this.activeCharacter.name;
    // console.log('Character ID: ', this.id);
  }
})
</script>

<template>
  <div class="flex flex-center">
    <div class="characterName column">
      <span class="label text-h6">
        <strong>Character Name</strong>
      </span>
      <q-input standout debounce="500" v-model="characterName" @blur="update" style="width: 300px"/>
    </div>
  </div>
</template>

<style scoped>



</style>
