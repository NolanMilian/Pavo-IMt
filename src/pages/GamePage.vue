<script>
import {defineComponent} from 'vue'
import DnD5eLayout from "components/DnD5e/DnD5eLayout.vue";
import {useUserStore} from "stores/user-store";
import {db, auth} from "boot/firebase";
import AuthUser from "src/models/AuthUser";
import User from "src/models/User"
import {mapStores} from "pinia";
import DnD5eCharacter from "src/models/DnD5eCharacter";
import Character from "src/models/Character";

export default defineComponent({
  name: "GamePage",
  components: {DnD5eLayout},
  data() {
    return {
      // user: User(auth.currentUser.uid),
      userStore: useUserStore(),
      // data: {name: ''},
      newCharacter: new Character(),
      // authUser: auth.currentUser.uid,
    }
  },
  computed: {
    // ...mapStores(useUserStore),
  },
  methods: {
    getCharacters() {this.userStore.getCharacters()},
    selectCharacter(characterId) {this.userStore.selectCharacter(characterId)},
    addCharacter(data) {this.userStore.addCharacter(data)},
    updateCharacter(character, data) {}
  },
  mounted() {
    this.getCharacters();
    this.selectCharacter('RNbVeJj4rr5c55j93EZE')
  }
})
</script>

<template>
  <q-page class="flex flex-center">
    <DnD5eLayout :data="userStore.activeCharacter"/>
    <q-btn @click="getCharacters()">Press me to get new characters</q-btn>
    <q-btn @click="selectCharacter('RNbVeJj4rr5c55j93EZE')">Press me to select a character</q-btn>
    <q-input v-model="newCharacter.name"></q-input>
    <q-btn @click="addCharacter(newCharacter)">Press me to add a character</q-btn>
  </q-page>
</template>

<style scoped>

</style>
