// import firebase from "firebase";

export default function Character(id, data) {
  id = id ?? '';
  data = data ?? {};

  return {
    id: id,
    gameType: data.gameType ?? '',
    campaignName: data.campaignName ?? '',
    favorite: data.favorite ?? false,
    name: data.name ?? '',
    race: data.race ?? '',
    inspiration: false,
    health: data.health ?? { 
      current: 1, 
      max: 1, 
      temp: 0 },
    initialRolls: data.initialRolls ?? { 0: [] },
    abilityScores: {

      baseAbilityScores: data.abilityScores.baseAbilityScores ?? { str, dex, con, int, wis, cha },
      abilityScoreRacialBonuses: data.abilityScores.abilityScoreRacialBonuyScoreRacialBonus ?? { str, dex, con, int, wis, cha },
      abilityScoreImproments: data.abilityScores.abilityScoreImprovements ?? { str, dex, con, int, wis, cha },
      abilityScoreMiscBonuse: data.abilityScores.scoreMiscBonuses ?? { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreStackingBonuses: data.abilityScores.abilityScoreStackingBonuses ?? { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreSetScores: data.abilityScores.abilityScoreSetScores ?? { str: 0, dex, con, int, wis, cha },
      abilityScoreOtherModifiers: data.abilityScores.abilityScoreOtherModifiers ?? { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreOverrides: data.abilityScores.abilityScoreOverides ?? { str, dex, con, int, wis, cha },
    },
    scoreProficiencies: data.scoreProficiencies ?? {},
    get abilityScoresTotal() {},
    get abilityModifiers() {
      Object.keys(abilityScores).Foreach( function (key) { Math.floor((abilityScores[key] -10) / 2) } );
      return this.abilityScores;
    },
    get abilityModifierStrings() {
      for (const property in abilityMorifiers ){}
      return {}
    },
    savingTrows: data.savingThrows ?? {
      
    },
    get abilitySaves() {},
    armorClass: {
      get totalArmorClass() {},
      armor: data.armorClass.armor ?? {score: 0, name: ''},
      get ArmorBonus() {},
      shield: data.armorClass.shield ?? {score: 0, name: ''},
      get shieldBonus() {},
      miscArmorBonus: data.armorClass.miscArmorBonus ?? 0,
    },
    movementSpeed: data.movementSpeed ?? {
      activeMovementSpeed: 'walking',
      walking: { 
        speed: 30, 
        source: 'Players Handbook' }, 
      climbing: {}, 
      swimming: {}, 
      flying: {}, 
      burrowing: {} 
    },
    level: data.level ?? '',
    classData: data.classData ?? {
      classLevelString: '',
      classString: '',
      classes: [
        {
          className: '',
          classLevel: 1,
        },
      ],
    },
    get characterLevel() {
      return this.classData.classes.length;
    },
    get classLevels(){
      return null;
    },
    creationDate: data.creationDate ?? firebase.firestore.FieldValue.serverTimestamp(),
    updateDate: firebase.firestore.FieldValue.serverTimestamp(),
    proficienciesAndLanguages: data.proficienciesAndLanguagesAndLanguages ?? {
      armor: [],
      weapons: [],
      tools: [],
      languages: [ { name: 'Common', source: 'Players Handbook' } ],
    },
    inventory: data.inventory ?? { money: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 }, equipment: {}, backpack: {}, },
    notes: data.notes ?? { organizations: '', allies: '', enemies: '', backstory: '', others: '' },
    description: data.description ?? {
      background: { 
        name: '', 
        content: '', 
      },
      personalityTraits: '',
      ideals: '',
      bonds: '',
      flaws: '',
      appearance: '',
      characteristics: {
        alignment: '',
        gender: '',
        eyes: '',
        size: 'Medium',
        height: '',
        faith: '',
        hair: '',
        skin: '',
        age: 0,
        weight: 0
      }
    }
  }
}
