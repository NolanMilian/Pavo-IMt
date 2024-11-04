<script>
import {defineComponent} from 'vue'
import DnD5eCharacter from "../models/DnD5eCharacter";
import CharacterSelectionItem from "components/CharacterSelectionItem.vue";

export default defineComponent({
  name: "CharactersPage",
  components: {CharacterSelectionItem},
  data() {
    return{
      characters: [new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter(), new DnD5eCharacter()],
      character: new DnD5eCharacter(),
    }
  },
})
</script>

<template>
<q-page class="flex flex-center">
  <div class="row q-gutter-lg q-mx-xl container">
    <character-selection-item
      v-for="data in characters"
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
