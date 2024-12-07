<script>
import { defineComponent } from 'vue'
import DnD5eCharacter from "src/models/DnD5eCharacter";
import { useUserStore } from "stores/user-store";
import {createRouter as $router} from "vue-router";

export default defineComponent({
  name: "CharacterSelectionItem",
  components: {},
  props: ['characterObj'],
  data() {
    return{
      character: new DnD5eCharacter(),
      bookmark: true,
      userStore: useUserStore(),
    }
  },
  methods: {
    deleteCharacter() {
      this.userStore.deleteCharacter(this.characterObj.id);
    },
    selectCharacter() {
      if (this.userStore.activeCharacter !== this.characterObj)
      this.userStore.activateCharacter(this.characterObj.id)
      this.$router.push({name: 'Character', params: { id: this.characterObj.id } })
    }
  },
})
</script>

<template>
  <q-card class="card" flat bordered square dark>
    <q-card-section horizontal>
<!--      <q-img-->
<!--        class="col"-->
<!--        src="https://cdn.quasar.dev/img/mountains.jpg"-->
<!--      >-->
        <div class="full-width cardBg q-px-md q-py-lg">
          <div class="text-h5">{{ characterObj.name }}</div>
<!--          <div class="text-subtitle2">Level {{ characterObj.level }} | {{ characterObj.race }} {{ characterObj.class ? '|' : '' }} {{ characterObj.class.level }}</div>-->
<!--          <div class="text-subtitle2">Level {{ characterObj.level }} | {{ characterObj.race }} {{ characterObj.class ? '|' : '' }} {{ characterObj.class.level }}</div>-->
        </div>
<!--      </q-img>-->
      <q-card-actions vertical class="justify-around q-px-md bg-grey">
        <q-btn flat round color="primary" icon="visibility" @click="selectCharacter"><q-tooltip anchor="center right" self="center left">View</q-tooltip></q-btn>
        <q-btn flat round color="black" icon="settings" ><q-tooltip anchor="center right" self="center left">Settings</q-tooltip></q-btn>
        <q-btn flat round color="amber" :icon="characterObj.favorite ? 'bookmark' : 'bookmark_outline'" ><q-tooltip anchor="center right" self="center left">Bookmark</q-tooltip></q-btn>
        <q-btn flat round color="red" icon="delete" @click="deleteCharacter"><q-tooltip anchor="center right" self="center left">Delete</q-tooltip></q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.card {
  width: 375px;
  max-width: 375px;
  height: 196px;
  max-height: 196px;
}
.cardBg {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}
</style>
