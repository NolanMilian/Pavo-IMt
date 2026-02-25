export default function fifthEditionCharacterSheetConverter(xmlData) {
  const character = xmlData.getElementsByTagName('character')[0];

  function getData(tagNameString) {
    return character.getElementsByTagName(tagNameString)[0].childNodes[0].nodeValue
  }

  function parseWeapons(weaponsString) {
    const weaponComponents = weaponsString.split('⊠');
    const weaponCount = parseInt(weaponComponents[0]);

    let weapons = {};

    for (let i = 0; i < weaponCount; i++) {
      const startIndex = i * 13 + 1;
      const weaponType = weaponComponents[startIndex + 11];

      if (!weapons[weaponType]) {
        weapons[weaponType] = [];
      }

      weapons[weaponType].push(weaponComponents.slice(startIndex, startIndex + 13));
    }

    return weapons;
  }

  function parseCharacterLevel(classString) {
    const classComponents = classString.split('⊠');
    let classLevel = 0;

    for (const value of classComponents) {
      classLevel += parseInt(value.split('⊡')[2]);
    }

    return classLevel;
  }

  function parseClasses(classString) {
    const classComponents = classString.split('⊠');

    let classes = [];

    for (const value of classComponents) {
      const className = value.split('⊡')[0];
      const subclassName = value.split('⊡')[1];
      const level = value.split('⊡')[2];
      classes.push({className: className, subClassName: subclassName, level: parseInt(level)});
    }

    return classes;
  }

  function parseAbilityScores(abilityScoresString) {
    const abilityScoresComponents = abilityScoresString.split('⊠');
    return {
      abilityScoresOverrides: {
        str: parseInt(abilityScoresComponents[0]),
        dex: parseInt(abilityScoresComponents[1]),
        con: parseInt(abilityScoresComponents[2]),
        int: parseInt(abilityScoresComponents[3]),
        wis: parseInt(abilityScoresComponents[4]),
        cha: parseInt(abilityScoresComponents[5])
      },
      abilitySaveProficiencies: {
        str: abilityScoresComponents[6],
        dex: abilityScoresComponents[7],
        con: abilityScoresComponents[8],
        int: abilityScoresComponents[9],
        wis: abilityScoresComponents[10],
        cha: abilityScoresComponents[11]
      },
      abilitySaveMisc: {
        str: parseInt(abilityScoresComponents[12]),
        dex: parseInt(abilityScoresComponents[13]),
        con: parseInt(abilityScoresComponents[14]),
        int: parseInt(abilityScoresComponents[15]),
        wis: parseInt(abilityScoresComponents[16]),
        cha: parseInt(abilityScoresComponents[17])
      },

    };
  }

  function parseSkillInfo(skillInfoString) {
  }

  return {
    gameType: 'dnd5e',

    initMiscMod: parseInt(getData("initMiscMod")),
    improvedInitiative: parseInt(getData("improvedInitiative")),

    health: {
      max: parseInt(getData("maxHealth")),
      current: parseInt(getData("maxHealth")),
      // current: parseInt(getData("currentHealth")),
      temp: 0,
      // temp: parseInt(getData("currentTempHP")),
    },

    armorBonus: parseInt(getData("armorBonus")),
    shieldBonus: parseInt(getData("shieldBonus")),
    miscArmorBonus: parseInt(getData("miscArmorBonus")),
    unarmoredDefense: parseInt(getData("unarmoredDefense")),

    maxDex: parseInt(getData("maxDex")),

    proficiencyBonus: parseInt(getData("proficiencyBonus")),
    miscSpellAttackBonus: parseInt(getData("miscSpellAttackBonus")),
    miscSpellDCBonus: parseInt(getData("miscSpellDCBonus")),

    castingStatCode: parseInt(getData("castingStatCode")),

    // deathSaveSuccesses: parseInt(getData("deathSaveSuccesses")), // not needed
    // deathSaveFailures: parseInt(getData("deathSaveFailures")), // not needed
    // showDeathSaves: getData("showDeathSaves") === 'true', // not needed
    // raceCode: parseInt(getData("raceCode")), // not used
    // subraceCode: parseInt(getData("subraceCode")), // not used
    // backgroundCode: parseInt(getData("backgroundCode")), // not used
    // featCode: getData("featCode"), // not used
    // multiclassFeatures: getData("multiclassFeatures"), // not used

    offenseAbilityDisplay: parseInt(getData("offenseAbilityDisplay")),

    // baseSpeed: parseInt(getData("baseSpeed")), // Implemented in movement speed
    // speedMiscMod: parseInt(getData("speedMiscMod")), // Implemented in movement speed
    // movementMode: getData("movementMode"), // Implemented in movement speed
    movementSpeed: {
      activeMovementSpeed: 'walking',
      walking: parseInt(getData("baseSpeed")) + parseInt(getData("speedMiscMod")),
      walkingNotes: '',
      climbing: 0,
      climbingNotes: '',
      swimming: 0,
      swimmingNotes: '',
      flying: 0,
      flyingNotes: '',
      burrowing: 0,
      burrowingNotes: ''
    },

    classData: parseClasses(getData("classData").split('⊟')[0]),
    characterLevel: parseCharacterLevel(getData("classData").split('⊟')[0]),
    resources: getData("classData").split('⊟')[2].split('⊠'),
    feats: getData("classData").split('⊟')[3].split('⊠'),
    asi: getData("classData").split('⊟')[4].split('⊡'),
    race: getData("classData").split('⊟')[7],
    // raceLabel: getData("classData").split('⊟')[8],
    // background: getData("classData").split('⊟')[9],

    weaponList: parseWeapons(getData("weaponList")),

    abilityScores: parseAbilityScores(getData("abilityScores")),
    skillInfo: getData("skillInfo").split('⊠'),

    spellList: getData("spellList").split('⊠'),

    // noteList: getData("noteList").split('⊠'), // Implemented in all options below
    features: getData("noteList").split('⊠')[0],
    armorProficiencies: getData("noteList").split('⊠')[1].split("\n"),
    weaponProficiencies: getData("noteList").split('⊠')[2].split("\n"),
    toolProficiencies: getData("noteList").split('⊠')[3].split("\n"),
    languagesKnown: getData("noteList").split('⊠')[4].split("\n"),
    equipment: getData("noteList").split('⊠')[5].split("\n"),
    notes: getData("noteList").split('⊠')[6],
    classLabel: getData("noteList").split('⊠')[7],
    raceLabel: getData("noteList").split('⊠')[8],
    background: getData("noteList").split('⊠')[9],
    alignment: getData("noteList").split('⊠')[10],
    personalityTraits: getData("noteList").split('⊠')[11],
    ideals: getData("noteList").split('⊠')[12],
    bonds: getData("noteList").split('⊠')[13],
    flaws: getData("noteList").split('⊠')[14],
    name: getData("noteList").split('⊠')[15],
    classAgain: getData("noteList").split('⊠')[16],
    cp: getData("noteList").split('⊠')[17],
    sp: getData("noteList").split('⊠')[18],
    ep: getData("noteList").split('⊠')[19],
    gp: getData("noteList").split('⊠')[20],
    pp: getData("noteList").split('⊠')[21],
    experience: getData("noteList").split('⊠')[22],

    hitDiceList: getData("hitDiceList").split('⊠'),

    classResource: getData("classResource").split('⊠'),
  };
}
