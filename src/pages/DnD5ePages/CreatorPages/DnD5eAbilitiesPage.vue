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
      strBase: 0,
      strTotal: 0,
      dexBase: 0,
      dexTotal: 0,
      conBase: 0,
      conTotal: 0,
      intBase: 0,
      intTotal: 0,
      wisBase: 0,
      wisTotal: 0,
      chaBase: 0,
      chaTotal: 0,
      rollGroups: [
        {
          one: {roll: null, assignedAbility: '--'},
          two: {roll: null, assignedAbility: '--'},
          three: {roll: null, assignedAbility: '--'},
          four: {roll: null, assignedAbility: '--'},
          five: {roll: null, assignedAbility: '--'},
          six: {roll: null, assignedAbility: '--'},
          abilityCategories:[
            'STR',
            'DEX',
            'CON',
            'INT',
            'WIS',
            'CHA'
          ],
        }
      ],
      rollNumber1: null,
      rollNumber2: null,
      rollNumber3: null,
      rollNumber4: null,
      rollNumber5: null,
      rollNumber6: null,
      abilityCategories: [
        'STR',
        'DEX',
        'CON',
        'INT',
        'WIS',
        'CHA'
      ],
      abilities: {
        baseScores: {
          str: 0,
          dex: 0,
          con: 0,
          int: 0,
          wis: 0,
          cha: 0
        },
        totalScores: {
          str: 0,
          dex: 0,
          con: 0,
          int: 0,
          wis: 0,
          cha: 0
        }
      },
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
    },
    update() {
      this.userStore.updateCharacterVariable(this.id, 'abilities', this.abilities);
    },
    // setScores() {
    //   this.strTotal = this.strBase??3;
    //   this.dexTotal = this.dexBase??3;
    //   this.conTotal = this.conBase??3;
    //   this.intTotal = this.intBase??3;
    //   this.wisTotal = this.wisBase??3;
    //   this.chaTotal = this.chaBase??3;
    //   this.abilities.baseScores = {str:this.strBase??3,dex:this.dexBase??3,con:this.conBase??3,int:this.intBase??3,wis:this.wisBase??3,cha:this.chaBase??3};
    //   this.abilities.totalScores = {str:this.strTotal,dex:this.dexTotal,con:this.conTotal,int:this.intTotal,wis:this.wisTotal,cha:this.chaTotal};
    // },
    // saveHandler(){
    //   this.setScores();
    //   this.update();
    // }
    setScores() {
      this.strTotal = this.strBase;
      this.dexTotal = this.dexBase;
      this.conTotal = this.conBase;
      this.intTotal = this.intBase;
      this.wisTotal = this.wisBase;
      this.chaTotal = this.chaBase;
      // this.abilities.baseScores = {str: this.strBase || 3, dex: this.dexBase || 3, con: this.conBase || 3, int: this.intBase || 3, wis: this.wisBase || 3, cha: this.chaBase || 3};
      // this.abilities.totalScores = {str: this.strTotal, dex: this.dexTotal, con: this.conTotal, int: this.intTotal, wis: this.wisTotal, cha: this.chaTotal};

      Object.assign(this.abilities.baseScores, {str: this.strBase||3, dex: this.dexBase||3, con: this.conBase||3, int: this.intBase||3, wis: this.wisBase||3, cha: this.chaBase||3})
      Object.assign(this.abilities.totalScores, {str: this.strTotal, dex: this.dexTotal, con: this.conTotal, int: this.intTotal, wis: this.wisTotal, cha: this.chaTotal})


      },
    saveHandler() {
      this.setScores();
      this.update();
    }


  },

  mounted() {
    this.activeCharacter = this.userStore.activeCharacter;
    console.log(this.activeCharacter)
    if (this.activeCharacter.abilities)
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
            v-model="abilities.baseScores.str"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total: {{ abilities.totalScores.str?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Dexterity</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilities.baseScores.dex"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ abilities.totalScores.con ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Constitution</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilities.baseScores.con"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ abilities.totalScores.con ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Intelligence</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilities.baseScores.int"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ abilities.totalScores.int ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Wisdom</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilities.baseScores.wis"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ abilities.totalScores.wis ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Charisma</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilities.baseScores.cha"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ abilities.totalScores.cha ?? '--' }}</div>
        </div>
      </div>
<!--      <div class="row q-gutter-md">-->
<!--        <div class="col" v-for="roll in rollGroups" :key="roll">-->
<!--          <div class="rollNumber">{{ roll.one.roll ?? '&#45;&#45;' }}</div>-->
<!--          <div class="rollAssign"><q-select v-model="roll.one.assignedAbility" /></div>-->
<!--        </div>-->
<!--      </div>-->

      <q-btn class="bg-primary text-white" label="Save Scores" @click="saveHandler"></q-btn>
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
.rollNumber {
  font-size: 25px;
  font-weight: bold;
}

</style>
