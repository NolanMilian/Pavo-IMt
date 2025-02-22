<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CharacterCreationSelectMethodPage"
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
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions align="between" class="bg-dark">
        <q-btn flat @click="this.$router.push({name: 'index'})">Create New</q-btn>
        <q-btn disable flat @click="this.$router.push({name: 'index'})">Browse Pre-made</q-btn>
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
