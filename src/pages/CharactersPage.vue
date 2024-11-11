<script>
import {defineComponent} from 'vue'
import DnD5eCharacter from "../models/DnD5eCharacter";
import CharacterSelectionItem from "components/CharacterSelectionItem.vue";
import {useUserStore} from "stores/user-store";
import {mapStores} from "pinia";

export default defineComponent({
  name: "CharactersPage",
  components: {CharacterSelectionItem},
  data() {
    return{
      characters: [new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter()],
      character: new DnD5eCharacter(),
      userStore: useUserStore(),
    }
  },
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {

  },
  created() {
    this.userStore.getCharacters()
  },
})
</script>

<template>
<q-page class="flex flex-center">
  <q-btn @click="selectCharacter">Press me to add a character</q-btn>
  <q-btn @click="selectCharacter">Press me to delete a character</q-btn>
  <div class="row q-gutter-lg container items-center">
    <div class="topLabel text-h1 text-bold full-width">
      My Characters
    </div>
    <character-selection-item
      v-for="data in userStore.allCharacters"
      :key="data.id"
      :character-obj="data"
    />
  </div>
</q-page>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
