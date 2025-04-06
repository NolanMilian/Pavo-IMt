const proficiencyValues = {notProficient: 0, halfProficient: 2, proficient: 5, doubleProficient: 10};
const scoreTypes = {
  str: 'Strength',
  dex: 'Dexterity',
  con: 'Constitution',
  int: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma'
};
const resistantTypes = [
  'Acid',
  'Bludgeoning',
  'Bludgeoning from non magical attacks',
  'Cold',
  'Damage Dealt by Traps',
  'Damage from Spells',
  'Damage of the type matching the animated breath\'s form (acid, cold, fire, lightning, or poison)',
  'Fire',
  'Force',
  'Lightning',
  'Lightning (granted by darksteel greataxe)',
  'Necrotic',
  'One of the following: acid, cold, fire, lightning, or poison',
  'Piercing',
  'Poison',
  'Psychic',
  'Psychic (granted by Ruidium Armor)',
  'Radiant',
  'Ranged Attacks',
  'Slashing',
  'Thunder'
];
const immunityTypes = {
  damage: [
    'Bludgeoning',
    'Piercing',
    'Slashing',
    'Lightning',
    'Thunder',
    'Poison',
    'Cold',
    'Radiant',
    'Fire',
    'Necrotic',
    'Acid',
    'Psychic',
    'Force',
    'Petrified (Aberrant Armor Only)'
  ],
  conditions: [
    // includes exhaustion
    'Blinded',
    'Charmed',
    'Deafened',
    'Exhaustion',
    'Frightened',
    'Grappled',
    'Incapacitated',
    'Invisible',
    'Paralyzed',
    'Petrified',
    'Poisoned',
    'Prone',
    'Restrained',
    'Stunned',
    'Unconscious'
  ]
};
const vulnerabilityTypes = [
  'Acid',
  'Bludgeoning',
  'Cold',
  'Fire',
  'Force',
  'Lightning',
  'Necrotic',
  'Piercing',
  'Poison',
  'Psychic',
  'Radiant',
  'Slashing',
  'Slashing from a Vorpal Sword',
  'Thunder'
]
const conditions = [
  // excludes exhaustion
  'Blinded',
  'Charmed',
  'Deafened',
  'Frightened',
  'Grappled',
  'Incapacitated',
  'Invisible',
  'Paralyzed',
  'Petrified',
  'Poisoned',
  'Prone',
  'Restrained',
  'Stunned',
  'Unconscious'
];
const skills = {
  athletics: {skillType: 'str'},
  acrobatics: {skillType: 'dex'},
  slightOfHand: {skillType: 'dex'},
  stealth: {skillType: 'dex'},
  arcana: {skillType: 'int'},
  history: {skillType: 'int'},
  investigation: {skillType: 'int'},
  nature: {skillType: 'int'},
  religion: {skillType: 'int'},
  animalHandling: {skillType: 'wis'},
  insight: {skillType: 'wis'},
  medicine: {skillType: 'wis'},
  perception: {skillType: 'wis'},
  survival: {skillType: 'wis'},
  deception: {skillType: 'cha'},
  intimidation: {skillType: 'cha'},
  performance: {skillType: 'cha'},
  persuasion: {skillType: 'cha'}
};
const equipment = async () => { 
  if (window.fetch) {
        const response = await fetch("https://www.dnd5eapi.co/api/equipment");
          const jsonData = await response.json();
            console.log(jsonData);
            return jsonData;       
  } else { 
    axios.get()
    return {}
  }
}

const sources = {
  phb: {
    name: 'Players Handbook / Baisc Rules',
    shortName: 'PHB',
  },
  motm: {
    name: 'Mordenkainen Presents: Monsters of the Multiverse',
    shortName: 'MOTM',
  },
  sotdq: {
    name: 'Dragonlance: Shadow of the Dragon Queen',
    shortName: 'SOTDQ',
  },
}

const races = [
  {
    name: 'Dragonborn',
    subRaces: 
    [
      {
      type: 'Black',
      name: 'Black Dragonborn',
      source: sources.phb,
      },
      {
        type: 'Blue',
      },
      {
        type: 'Brass',
      },
      {
        type: 'Bronze',
      },
      {
        type: 'Copper',
      },
      {
        type: 'Gold',
      },
      {
        type: 'Green',
      },
      {
        type: 'Red',
      },
      {
        type: 'Silver',
      },
      {
        type: 'White',
      }
    ],
    source: sources.phb,
  },
  {
    name: 'Dwarf',
    source: sources.phb,
  },
]

export {proficiencyValues, scoreTypes, resistantTypes, immunityTypes, vulnerabilityTypes, conditions, skills};

