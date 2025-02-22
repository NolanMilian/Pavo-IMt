<script>
import { defineComponent } from 'vue'
import { useUserStore } from "stores/user-store";
import Character from "src/models/Character";
import CharacterSelectionItem from "components/CharacterSelectionItem.vue";
import { useAuthStore } from "stores/auth-store";


export default defineComponent({
  name: "CharactersSelectionPage",
  components: {CharacterSelectionItem},
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
    if (this.authStore.isLoaded && this.authStore.isAuthenticated){
      this.getCharacters();
    }
  },
})
</script>

<template>
  <q-page class="flex flex-center">
    <div v-if="authStore.isAuthenticated" class="authenticated">
      <div v-show="userStore.allCharacters.length > 0" class="row q-gutter-lg container items-center q-mx-auto">
        <div class="topLabel full-width">
          <div class="text-h1 text-bold">
            My Characters <q-icon class="q-px-xl addCharacterBtn cursor-pointer" name="person_add" @click="this.$router.push({name: 'select-creator'})"><q-tooltip>Add New Character</q-tooltip></q-icon>
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
<!--      <div v-show="userStore.allCharacters <= 0" class="" >No Character Information 😢 <q-btn @click="refreshPage">Click to Reload</q-btn> </div>-->
    </div>
  </q-page>
</template>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
}
</style>
