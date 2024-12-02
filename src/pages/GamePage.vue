<script>
import {defineComponent} from 'vue'
import DnD5eLayout from "components/DnD5e/DnD5eLayout.vue";
import {useUserStore} from "stores/user-store";
import Character from "src/models/Character";

export default defineComponent({
  name: "GamePage",
  components: {DnD5eLayout},
  data() {
    return {
      userStore: useUserStore(),
      newCharacter: new Character(),
    }
  },
  methods: {
    getCharacters() {this.userStore.getCharacters()},
    selectCharacter(characterId) {this.userStore.selectCharacter(characterId)},
    addCharacter(data) {this.userStore.addCharacter(data)},
    updateCharacter(character, data) {}
  },
  mounted() {
    this.getCharacters();
    this.selectCharacter('9v0qQSAGDo52AObkDdNU')
  }
})
</script>

<template>
  <q-page class="flex flex-center">
    <DnD5eLayout :data="userStore.activeCharacter"/>
    <div class="debug">
      <q-btn @click="getCharacters()">Press me to get the characters</q-btn>
      <q-btn @click="selectCharacter('9v0qQSAGDo52AObkDdNU')">Press me to select a character</q-btn>
      <q-input v-model="newCharacter.name"></q-input>
      <q-btn @click="addCharacter(newCharacter)">Press me to add a character</q-btn>
    </div>
  </q-page>
</template>

<style scoped>

</style>
