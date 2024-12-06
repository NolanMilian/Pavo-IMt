<script>
import { defineComponent } from 'vue'
import { useUserStore } from "stores/user-store";
import { auth } from 'boot/firebase'
// import { authUser } from 'models'
import Character from "src/models/Character";
import CharacterSelectionItem from "components/CharacterSelectionItem.vue";
import { useAuthStore } from "stores/auth-store";

export default defineComponent({
  name: "CharactersPage",
  components: {CharacterSelectionItem},
  data() {
    return{
      newCharacter: new Character(),
      userStore: useUserStore(),
      authStore: useAuthStore(),
      authUser: auth,
    }
  },
  methods: {
    getCharacters() {this.userStore.getCharacters(this.authUser.currentUser.uid)},
    selectCharacter(characterId) {this.userStore.selectCharacter(characterId)},
    addCharacter(data) {this.userStore.addCharacter(data)},
    updateCharacter(character, data) {}
  },
  mounted() {
    if (this.authUser.currentUser?.uid){
      this.getCharacters();
    }
  },
})
</script>

<template>
<q-page class="flex flex-center">
<!--  <q-btn @click="selectCharacter">Press me to add a character</q-btn>-->
<!--  <q-btn @click="selectCharacter">Press me to delete a character</q-btn>-->
  <div v-show="userStore.allCharacters" class="row q-gutter-lg container items-center">
    <div class="topLabel full-width">
      <div class="text-h1 text-bold">
        My Characters <q-icon class="q-px-xl addCharacterBtn cursor-pointer" name="person_add"><q-tooltip>Add New Character</q-tooltip></q-icon>
      </div>
    </div>
    <character-selection-item
      v-for="data in userStore.allCharacters"
      :key="data.id"
      :character-obj="data"
    />
  </div>
  <div v-show="!userStore.allCharacters" class="" >No Character Information 😢 <q-btn @click="getCharacters">Click to Reload</q-btn> </div>
</q-page>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
