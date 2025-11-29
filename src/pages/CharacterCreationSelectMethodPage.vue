<script>
import {defineComponent} from 'vue'
import {db} from "boot/firebase";
import {useCharacterStore} from "stores/character-store";
import {useAuthStore} from "stores/auth-store";

export default defineComponent({
  name: "CharacterCreationSelectMethodPage",
  data() {
    return {
      userStore: useCharacterStore(),
      authStore: useAuthStore(),
    }
  },
  methods: {
    async createDnD5eCharacter(gameType) {
      let tempCharacterName = this.authStore.authUser.displayName + `'s Character`;
      let characterObj = {gameType: gameType, favorite: false, name: tempCharacterName};

      db
        .collection(`users/${useAuthStore().authUser.uid}/characters/`)
        .add(characterObj)
        .then((docRef) => {
          console.log('Character written with ID of: ', docRef.id);
          this.userStore.activateCharacter(docRef.id);
          this.$router.push({name: 'dnd5e-settings', params: {id: docRef.id}}) // TODO: put this back in when redirect works properly 'creator-dnd5e'
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        })
    }
  },
})
</script>

<template>
  <div class="title text-h1 justify-center flex flex-inline q-mb-xl">
    Select Game Type
  </div>
  <q-page class="flex flex-block justify-center">

    <div class="q-pa-md row items-start q-gutter-md">

      <q-card class="dnd5e card text-white">
        <q-card-section>
          <div class="text-h6">Dungeons & Dragons</div>
          <div class="text-subtitle2">Fifth Edition</div>
        </q-card-section>

        <q-card-section>
          Extra Text
        </q-card-section>

        <q-separator dark />

        <q-card-actions align="between" class="bg-dark">
          <q-btn flat @click="createDnD5eCharacter('DnD5e')">Create New</q-btn>
          <q-btn disable flat>Browse Pre-made</q-btn>
        </q-card-actions>
      </q-card>

    </div>

  </q-page>
</template>

<style scoped>
.card {
  width: 300px;
}
.dnd5e {
background: radial-gradient(circle, #d70114 0%, #75010c 100%);
}
</style>
