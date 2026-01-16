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

    // Ability Scores
    abilityScores: data.abilityScores ?? {
      baseAbilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
      abilityScoreRacialBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreImprovements: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreMiscBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreStackingBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreSetScores: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreOtherModifiers: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreOverrides: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      abilityScoreModifiers: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    },
    scoreProficiencies: data.scoreProficiencies ?? {},
    get abilityScoresTotal() { return this.abilityScores.baseAbilityScores},

    // Saving Throws
    savingThrows: data.savingThrows ?? {

    },
    get abilitySaves() {},
    // armorClass: {
    get totalArmorClass() {},
    armor: data.armor ?? {score: 0, name: ''},
    get armorBonus() {},
    shield: data.shield ?? {score: 0, name: ''},
    get shieldBonus() {},
    miscArmorBonus: data.miscArmorBonus ?? 0,
    // },
    movementSpeed: data.movementSpeed ?? {
      activeMovementSpeed: 'walking',
      walking: {
        speed: 30,
        source: 'Players Handbook' },
      climbing: 0,
      swimming: 0,
      flying: 0,
      burrowing: 0
    },
    level: data.level ?? '',
    classData: data.classData ?? {
      classLevelString: 'Level',
      classString: '',
      classes: [
        {
          className: '',
          classLevel: 0,
        },
      ],
    },
    get characterLevel() {
      return this.classData.classes.length;
    },
    get classLevels(){
      return null;
    },
    // creationDate: data.creationDate ?? firebase.firestore.FieldValue.serverTimestamp(),
    // updateDate: firebase.firestore.FieldValue.serverTimestamp(),
    // proficienciesAndLanguages: data.proficienciesAndLanguages ?? {
    armorProficiencies: data.armorProficiencies ?? [{}],
    weaponProficiencies: data.weaponProficiencies ?? [{}],
    toolProficiencies: data.toolProficiencies ?? [{}],
    languagesKnown: data.languagesKnown ?? [ { name: 'Common', source: 'Players Handbook' } ],
    // },
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
