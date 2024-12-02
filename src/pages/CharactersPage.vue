<script>
import { defineComponent } from 'vue'
import { useUserStore } from "stores/user-store";
import { auth } from 'boot/firebase'
import Character from "src/models/Character";
import CharacterSelectionItem from "components/CharacterSelectionItem.vue";

export default defineComponent({
  name: "CharactersPage",
  components: {CharacterSelectionItem},
  data() {
    return{
      newCharacter: new Character(),
      // characters: [new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter()],
      // character: new DnD5eCharacter(),
      userStore: useUserStore(),
      authUser: auth,
    }
  },
  methods: {
    getCharacters() {this.userStore.getCharacters()},
    selectCharacter(characterId) {this.userStore.selectCharacter(characterId)},
    addCharacter(data) {this.userStore.addCharacter(data)},
    updateCharacter(character, data) {}
  },
  beforeMount() {
    this.getCharacters();
    this.selectCharacter('9v0qQSAGDo52AObkDdNU');
  },
})
</script>

<template>
<q-page class="flex flex-center">
<!--  <q-btn @click="selectCharacter">Press me to add a character</q-btn>-->
<!--  <q-btn @click="selectCharacter">Press me to delete a character</q-btn>-->
  <div v-if="authUser.currentUser" class="row q-gutter-lg container items-center">
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
  <div v-else class="" >No Character Information 😢</div>
</q-page>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
