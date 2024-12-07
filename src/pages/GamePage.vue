<script>
import {defineComponent} from 'vue'
import DnD5eLayout from "components/DnD5e/DnD5eLayout.vue";
import {useUserStore} from "stores/user-store";
import {db} from "boot/firebase";
import {useAuthStore} from "stores/auth-store";
import Character from "src/models/Character";

export default defineComponent({
  name: "GamePage",
  props: ['id'],
  components: {DnD5eLayout},
  data() {
    return {
      userStore: useUserStore(),
      activeCharacter: {},
    }
  },
  methods: {

  },
  created() {
    db
      .doc(`users/${useAuthStore().authUser.uid}/characters/${this.id}`)
      .onSnapshot((doc) => {
        this.activeCharacter = doc.data();
        this.activeCharacter.id = doc.id;
        console.log('active', this.activeCharacter)
      });
  }
})
</script>

<template>
  <div class="name full-width bg-grey-5 text-h4">{{ activeCharacter.name }}</div>
  <q-page class="flex flex-center">
    <DnD5eLayout :data="userStore.activeCharacter"/>
<!--    <div class="debug">-->
<!--      <q-btn @click="getCharacters()">Press me to get the characters</q-btn>-->
<!--      <q-btn @click="selectCharacter('9v0qQSAGDo52AObkDdNU')">Press me to select a character</q-btn>-->
<!--      <q-input v-model="newCharacter.name"></q-input>-->
<!--      <q-btn @click="addCharacter(newCharacter)">Press me to add a character</q-btn>-->
<!--    </div>-->
  </q-page>
</template>

<style scoped>

</style>
