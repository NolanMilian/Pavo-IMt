<script>
import {defineComponent} from 'vue'
import DnD5eLayout from "components/DnD5e/DnD5eLayout.vue";
import {useCharacterStore} from "stores/character-store";
import {db} from "boot/firebase";
import {useAuthStore} from "stores/auth-store";
import Character from "src/models/Character";

export default defineComponent({
  name: "GamePage",
  props: ['id'],
  components: {DnD5eLayout},
  data() {
    return {
      characterStore: useCharacterStore(),
      activeCharacter: {},
    }
  },
  methods: {
    abilityModifiers () {
      const stats = this.activeCharacter.abilityScoresTotal;

      for (let key in stats) {
        if (stats.hasOwnProperty(key)) {
          let value = stats[key];
          stats[key] = Math.floor((value - 10) / 2);
          // console.log(key, stats[key])
        }
      }
      this.activeCharacter.abilityScoreModifiers = stats;
      this.characterStore.activeCharacter.abilityScoreModifiers = stats;
      // console.log(stats);
    },
    updateCharacter() {
      if (this.characterStore.activeCharacter.uid !== this.id)
        this.characterStore.activateCharacter(this.id)
      this.$router.push({name: 'dnd5e-settings', params: {id: this.id}})
    },
  },
  created() {
    this.characterStore.activateCharacter(this.id);
    if (!!this.characterStore.activeCharacter) {
      this.activeCharacter = this.characterStore.activeCharacter
    } else {
      while (!!!this.characterStore.activeCharacter) {
        this.activeCharacter = this.characterStore.activeCharacter
      }
    }
    // this.activeCharacter = this.characterStore.activeCharacter;
    // db
    //   .doc(`characters/${this.id}`)
    //   .onSnapshot((doc) => {
    //     // this.activeCharacter = doc.data();
    //     // this.activeCharacter.id = doc.id;
    //     this.characterStore.activeCharacter = new Character(doc.id, doc.data());
    //     this.activeCharacter = new Character(doc.id, doc.data());
    //     this.abilityModifiers();
    //
    //     // console.log('active', this.activeCharacter)
    //   });
    // this.abilityModifiers();
  },
})
</script>

<template>
  <q-page v-if="!!activeCharacter">
    <div class="name full-width bg-grey-5">
      <div class="constrain q-mx-auto">
        <div class="name text-h3 relative-position">
          {{ activeCharacter.name }}
          <q-btn round flat class="absolute-right" icon="settings" size="16px" @click="updateCharacter"><q-tooltip>Settings Page</q-tooltip></q-btn>
        </div>
        <div class="details text-h5 text-weight-light">
          {{ activeCharacter.race }} | {{ activeCharacter?.classData?.classLevelString }}
        </div>
      </div>
    </div>

    <div class="q-mt-lg flex flex-center">
      <DnD5eLayout v-if="activeCharacter.gameType === 'DnD5e'" :data="activeCharacter"/>
      <!--        <div class="debug">-->
      <!--          <q-btn @click="logChar()">Press me to get the characters</q-btn>-->
      <!--          <q-btn @click="selectCharacter('9v0qQSAGDo52AObkDdNU')">Press me to select a character</q-btn>-->
      <!--          <q-input v-model="newCharacter.name"></q-input>-->
      <!--          <q-btn @click="addCharacter(newCharacter)">Press me to add a character</q-btn>-->
      <!--        </div>-->
    </div>
  </q-page>
  <div v-else class="loading text-h1 text-bold">Loading...</div>
</template>

<style scoped>
.constrain {
  max-width: 1200px;
  min-width: 1024px;
  width: 100%;
}
</style>
