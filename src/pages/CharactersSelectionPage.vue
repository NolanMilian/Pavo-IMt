<script>
import { defineComponent } from 'vue'
import { useCharacterStore } from "stores/character-store";
import Character from "src/models/Character";
import CharacterSelectionItem from "components/CharacterSelectionItem.vue";
import { useAuthStore } from "stores/auth-store";


export default defineComponent({
  name: "CharactersSelectionPage",
  components: {CharacterSelectionItem},
  data() {
    return{
      newCharacter: new Character(),
      characterStore: useCharacterStore(),
      authStore: useAuthStore(),
      newCharacterDialog: false,
      deleteConfirmationDialog: false,
      characterToDelete: {},
    }
  },
  methods: {
    getUserCharacters() {this.characterStore.getUserCharacters()},
    addCharacter(data) {this.characterStore.addCharacter(data)},
    refreshPage() {
      location.reload();
    },
    deleteCharacter(){
      this.characterStore.deleteCharacter(this.characterToDelete.id);
    },
    deleteCharacterDialog(characterObj){
      this.characterToDelete = characterObj;
      this.deleteConfirmationDialog = true;
    },
  },
  created() {
    if (this.authStore.isLoaded && this.authStore.isAuthenticated){
      this.getUserCharacters();
    }
  },
})
</script>

<template>
  <q-page class="flex flex-center">
    <div v-if="authStore.isAuthenticated" class="authenticated">
      <div class="row q-gutter-lg container items-center q-mx-auto">
        <div class="topLabel full-width">
          <div class="text-h1 text-bold">
            My Characters <q-btn icon="person_add" rounded size="36px" class="q-px-xl addCharacterBtn cursor-pointer bg-primary text-white" @click="this.$router.push({name: 'select-creator'})"><q-tooltip>Add New Character</q-tooltip></q-btn>
          </div>
        </div>
        <character-selection-item
          v-show="characterStore.allCharacters.length > 0"
          v-for="data in characterStore.allCharacters"
          :key="data.id"
          :character-obj="data"
          class=""
          @delete-character="deleteCharacterDialog"
        />
      </div>
      <div v-show="characterStore.allCharacters <= 0" class="" >No Character Information 😢 <q-btn @click="refreshPage">Click to Reload</q-btn> </div>
    </div>

    <div v-else class="notAuthenticated">
      <div class="row q-gutter-lg container text-center items-center q-mx-auto">
        <div class="topLabel full-width">
          <div class="text-h1 text-bold">
            You're not logged in 😢
          </div>
          <div class="text-h3">
            But here's some pre-made content to look at
          </div>
          <div class="text-h5 q-mt-xl">
            No pre-made characters available yet. Check back later.
          </div>
        </div>
<!--        <character-selection-item-->
<!--          v-for="data in data"-->
<!--          :key="data.id"-->
<!--          :character-obj="data"-->
<!--          class=""-->
<!--        />-->
      </div>
<!--      <div v-show="characterStore.allCharacters <= 0" class="" >No Character Information 😢 <q-btn @click="refreshPage">Click to Reload</q-btn> </div>-->
    </div>
  </q-page>

  <q-dialog v-model="deleteConfirmationDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-negative">Delete Confirmation</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Are you sure you want to delete "{{ characterToDelete.name }}"?
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Confirm" color="negative" @click="deleteCharacter" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
}
</style>
