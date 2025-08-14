<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: "DnD5eCharacterCreatorLayout",
  props: ['id'],
  data() {
    return {
      userStore: useUserStore(),
    }
  },
  methods: {
    selectCharacter() {
      if (this.userStore.activeCharacter.uid !== this.id)
        this.userStore.activateCharacter(this.id)
      this.$router.push({name: 'character', params: {id: this.id}})
    },
  },
  mounted() {
    this.userStore.activateCharacter(this.id);
    // console.log('Character ID: ', this.id);
  }
})
</script>

<template>
<!--  <q-layout view="hHh Lpr fFf">-->
<!--    <q-page-sticky position="top">-->
      <div class="layout text-white">
        <q-toolbar>
          <q-toolbar-title>
            DnD5e | Character Creator: {{ userStore.activeCharacter.name }}
          </q-toolbar-title>
        </q-toolbar>

        <q-tabs align="center" outside-arrows inline-label>
          <q-route-tab exact name="dnd5e-settings" :to="{ name: 'dnd5e-settings', params: { id: id } }" label="Settings" icon="settings"/>
          <q-route-tab exact name="dnd5e-race" :to="{ name: 'dnd5e-race', params: { id: id } }" label="Race" />
          <q-route-tab exact name="dnd5e-class" :to="{ name: 'dnd5e-class', params: { id: id } }" label="Class" />
          <q-route-tab exact name="dnd5e-abilities" :to="{ name: 'dnd5e-abilities', params: { id: id } }" label="Abilities" />
<!--          <q-route-tab exact name="dnd5e-description" :to="{ name: 'dnd5e-description', params: { id: id } }" label="Description" />-->
<!--          <q-route-tab exact name="dnd5e-equipment" :to="{ name: 'dnd5e-equipment', params: { id: id } }" label="Equipment" />-->
<!--          <q-route-tab exact name="dnd5e-extras" :to="{ name: 'dnd5e-extras', params: { id: id } }" label="Extras" />-->
          <q-btn dense square class="no-wrap gameBtn q-ml-lg bg-primary" @click="selectCharacter"> <q-tooltip>Game Page</q-tooltip> Game Page</q-btn>
        </q-tabs>

      </div>

<!--    </q-page-sticky>-->
<!--  <div class="">-->
    <q-page-container>
      <router-view />
    </q-page-container>
<!--  </div>-->

<!--  </q-layout>-->
</template>

<style scoped lang="scss">
.layout {
  background: black;
  opacity: .8;
  height: 100px;
}
//.sub-layout-header {
//  background: black;
//  opacity: 0.8;
//  position: sticky !important;
//  top: 0;
//  z-index: 1000;
//}
//
//.sub-layout-content {
//  margin-top: 100px; /* Adjust the value to match the height of the fixed header */
//}

.gameBtn {
  min-width: 100px;
}


</style>
