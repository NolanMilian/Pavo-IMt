<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: "DnD5eAbilitiesPage",
  props: ['id'],
  data() {
    return {
      userStore: useUserStore(),
      activeCharacter: {},
      strBase: null,
      strTotal: null,
      dexBase: null,
      dexTotal: null,
      conBase: null,
      conTotal: null,
      intBase: null,
      intTotal: null,
      wisBase: null,
      wisTotal: null,
      chaBase: null,
      chaTotal: null,
      // abilities: {
      //   str: {
      //     baseValue: 0,
      //   },
      //   dex: {
      //     baseValue: 0,
      //   },
      // },
    }
  },
  methods: {
    roll4d6DropLowest() {
      const rolls = [];

      // Roll 4 d6 dice
      for (let i = 0; i < 4; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
      }

      // Sort the rolls in ascending order
      rolls.sort((a, b) => a - b);

      // Sum the highest 3 rolls
      return rolls[1] + rolls[2] + rolls[3];
    }
  },
  mounted() {
    // this.returnRaces();
    this.activeCharacter = this.userStore.activeCharacter;
    this.abilities = this.activeCharacter.abilities;
  },
})
</script>

<template>
  <div class="flex flex-center">
    <div class="column">
      <div class="row q-gutter-md">
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Strength</div>
          <q-input
            class=""
            outlined
            dense
            v-model="strBase"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total: {{ strTotal ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Dexterity</div>
          <q-input
            class=""
            outlined
            dense
            v-model="dexBase"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ conTotal ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Constitution</div>
          <q-input
            class=""
            outlined
            dense
            v-model="conBase"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ conTotal ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Intelligence</div>
          <q-input
            class=""
            outlined
            dense
            v-model="intBase"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ intTotal ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Wisdom</div>
          <q-input
            class=""
            outlined
            dense
            v-model="wisBase"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ wisTotal ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Charisma</div>
          <q-input
            class=""
            outlined
            dense
            v-model="chaBase"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ chaTotal ?? '--' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scoreLabel{
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
}
.total {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}

</style>
