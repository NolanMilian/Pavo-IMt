<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/BaseComponents/DisplayBox.vue";
import DnD5eCharacter from "src/models/DnD5eCharacter";

export default defineComponent({
  name: "CharacterSelectionItem",
  components: {},
  props: ['characterObj'],
  data() {
    return{
      character: new DnD5eCharacter(),
      bookmark: true,
    }
  },
  methods: {
    viewCharacter() {},
    editCharacter() {},
    deleteCharacter() {},
  },
  created() {
    console.log('character', this.character);
  }
})
</script>

<template>
  <q-card v-if="characterObj" class="card" flat bordered square dark>
    <q-card-section horizontal>
<!--      <q-img-->
<!--        class="col"-->
<!--        src="https://cdn.quasar.dev/img/mountains.jpg"-->
<!--      >-->
        <div class="full-width cardBg q-px-md q-py-lg">
          <div class="text-h5">{{ characterObj.name }}</div>
          <div class="text-subtitle2">Level {{ characterObj.level }} | {{ characterObj.race }} {{ characterObj.class ? '|' : '' }} {{ characterObj.class.level }}</div>
        </div>
<!--      </q-img>-->

      <q-card-actions vertical class="justify-around q-px-md bg-grey">
        <q-btn flat round color="primary" icon="visibility" ><q-tooltip anchor="center right" self="center left">View</q-tooltip></q-btn>
        <q-btn flat round color="amber" :icon="bookmark ? 'bookmark' : 'bookmark_outline'" ><q-tooltip anchor="center right" self="center left">Bookmark</q-tooltip></q-btn>
        <q-btn flat round color="red" icon="delete" ><q-tooltip anchor="center right" self="center left">Delete</q-tooltip></q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
  <div class="" v-else>No Character Information 😢</div>
</template>

<style scoped>
.card {
  width: 375px;
  max-width: 375px;
  height: 150px;
  max-height: 150px;
}
.cardBg {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}
</style>
