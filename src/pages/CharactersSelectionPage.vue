<script>
import { defineComponent } from 'vue'
import { useUserStore } from "stores/user-store";
import Character from "src/models/Character";
import CharacterSelectionItem from "components/CharacterSelectionItem.vue";
import { useAuthStore } from "stores/auth-store";
import AddCharacterDialog from "components/AddCharacter/AddCharacterDialog.vue";

export default defineComponent({
  name: "CharactersSelectionPage",
  components: {AddCharacterDialog, CharacterSelectionItem},
  data() {
    return{
      newCharacter: new Character(),
      userStore: useUserStore(),
      authStore: useAuthStore(),
      newCharacterDialog: false,
    }
  },
  methods: {
    getCharacters() {this.userStore.getCharacters()},
    addCharacter(data) {this.userStore.addCharacter(data)},
    refreshPage() {
      location.reload();
    },
  },
  created() {
    if (this.authStore.isLoaded){
      this.getCharacters();
    }
  },
})
</script>

<template>
<q-page class="flex flex-center">
  <div v-show="userStore.allCharacters.length > 0" class="row q-gutter-lg container items-center q-mx-auto">
    <div class="topLabel full-width">
      <div class="text-h1 text-bold">
        My Characters <q-icon class="q-px-xl addCharacterBtn cursor-pointer" name="person_add" @click="newCharacterDialog = true"><q-tooltip>Add New Character</q-tooltip></q-icon>
      </div>
    </div>
    <character-selection-item
      v-for="data in userStore.allCharacters"
      :key="data.id"
      :character-obj="data"
      class=""
    />
  </div>
  <div v-show="userStore.allCharacters <= 0" class="" >No Character Information 😢 <q-btn @click="refreshPage">Click to Reload</q-btn> </div>
</q-page>
  <add-character-dialog v-model="newCharacterDialog"/>
</template>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
}
</style>
