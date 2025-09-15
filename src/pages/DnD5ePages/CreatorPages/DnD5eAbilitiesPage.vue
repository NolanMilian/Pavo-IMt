<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: "DnD5eAbilitiesPage",
  props: ['id'],
  data() {
    return {
      userStore: useUserStore(),
      activeCharacter: this?.activeCharacter?.abilityScores ?? {
        abilityScoresTotal: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
      },
      saveIcon: false,
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
      abilityScores: {
        baseAbilityScores: {
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
      this.userStore.updateCharacterVariable(this.id, 'abilityScores', this.abilityScores);
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

      Object.assign(this.abilityScores.baseAbilityScores, {str: parseInt(this.abilityScores.baseAbilityScores.str), dex: parseInt(this.abilityScores.baseAbilityScores.dex), con: parseInt(this.abilityScores.baseAbilityScores.con), int: parseInt(this.abilityScores.baseAbilityScores.int), wis: parseInt(this.abilityScores.baseAbilityScores.wis), cha: parseInt(this.abilityScores.baseAbilityScores.cha)})
      // Object.assign(this.abilityScores.baseAbilityScores, {str: this.abilityScores.baseAbilityScores.str, dex: this.abilityScores.baseAbilityScores.dex, con: this.abilityScores.baseAbilityScores.con, int: this.abilityScores.baseAbilityScores.int, wis: this.abilityScores.baseAbilityScores.wis, cha: this.abilityScores.baseAbilityScores.cha})
      // Object.assign(this.abilityScores.totalScores, {str: this.strTotal, dex: this.dexTotal, con: this.conTotal, int: this.intTotal, wis: this.wisTotal, cha: this.chaTotal})


      },
    saveHandler() {
      this.saveIcon = true
      setTimeout(()=>{this.saveIcon = false},500)
      this.setScores();
      this.update();
    }


  },

  async mounted() {
    this.activeCharacter = await this.userStore.activeCharacter;
    // console.log('active character',this.activeCharacter)
    if (this.activeCharacter.abilityScores) {
      this.abilityScores = this.activeCharacter.abilityScores
    }
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
            v-model="abilityScores.baseAbilityScores.str"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total: {{ activeCharacter.abilityScoresTotal.str?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Dexterity</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilityScores.baseAbilityScores.dex"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ activeCharacter.abilityScoresTotal.dex ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Constitution</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilityScores.baseAbilityScores.con"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ activeCharacter.abilityScoresTotal.con ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Intelligence</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilityScores.baseAbilityScores.int"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ activeCharacter.abilityScoresTotal.int ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Wisdom</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilityScores.baseAbilityScores.wis"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ activeCharacter.abilityScoresTotal.wis ?? '--' }}</div>
        </div>
        <div class="col">
          <div class="scoreLabel text-uppercase text-bold">Charisma</div>
          <q-input
            class=""
            outlined
            dense
            v-model="abilityScores.baseAbilityScores.cha"
            max="18"
            min="3"
            style="width: 100px"
          />
          <div class="total text-uppercase text-bold text-center text-h6">Total{{ activeCharacter.abilityScoresTotal.cha ?? '--' }}</div>
        </div>
      </div>
<!--      TODO: put in rng for stat selection-->
<!--      <div class="row q-gutter-md">-->
<!--        <div class="col" v-for="roll in rollGroups" :key="roll">-->
<!--          <div class="rollNumber">{{ roll.one.roll ?? '&#45;&#45;' }}</div>-->
<!--          <div class="rollAssign"><q-select v-model="roll.one.assignedAbility" /></div>-->
<!--        </div>-->
<!--      </div>-->
      <q-btn :loading="saveIcon" color="primary" @click="saveHandler" label="Save Scores" />
<!--      <q-btn class="bg-primary text-white" label="Save Scores" @click="saveHandler"><q-icon v-if="saveIcon" class="q-pl-md" name="save" size="24px"/></q-btn>-->
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
