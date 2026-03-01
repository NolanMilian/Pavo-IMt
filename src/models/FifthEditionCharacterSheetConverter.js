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

  function getCharacterLevel(classString) {
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
        str: Boolean(abilityScoresComponents[6]),
        dex: Boolean(abilityScoresComponents[7]),
        con: Boolean(abilityScoresComponents[8]),
        int: Boolean(abilityScoresComponents[9]),
        wis: Boolean(abilityScoresComponents[10]),
        cha: Boolean(abilityScoresComponents[11])
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
    const proficiencyComponents = skillInfoString.split('⊠');
    return {
      skillProficiencies: {
        athletics: Boolean(proficiencyComponents[0]),
        acrobatics: Boolean(proficiencyComponents[1]),
        slightOfHand: Boolean(proficiencyComponents[2]),
        stealth: Boolean(proficiencyComponents[3]),
        arcana: Boolean(proficiencyComponents[4]),
        history: Boolean(proficiencyComponents[5]),
        investigation: Boolean(proficiencyComponents[6]),
        nature: Boolean(proficiencyComponents[7]),
        religion: Boolean(proficiencyComponents[8]),
        animalHandling: Boolean(proficiencyComponents[9]),
        insight: Boolean(proficiencyComponents[10]),
        medicine: Boolean(proficiencyComponents[11]),
        perception: Boolean(proficiencyComponents[12]),
        survival: Boolean(proficiencyComponents[13]),
        deception: Boolean(proficiencyComponents[14]),
        intimidation: Boolean(proficiencyComponents[15]),
        performance: Boolean(proficiencyComponents[16]),
        persuasion: Boolean(proficiencyComponents[17])
      },
      skillDoubleProficiencies: {
        athletics: Boolean(proficiencyComponents[38]),
        acrobatics: Boolean(proficiencyComponents[39]),
        slightOfHand: Boolean(proficiencyComponents[40]),
        stealth: Boolean(proficiencyComponents[41]),
        arcana: Boolean(proficiencyComponents[42]),
        history: Boolean(proficiencyComponents[43]),
        investigation: Boolean(proficiencyComponents[44]),
        nature: Boolean(proficiencyComponents[45]),
        religion: Boolean(proficiencyComponents[46]),
        animalHandling: Boolean(proficiencyComponents[47]),
        insight: Boolean(proficiencyComponents[48]),
        medicine: Boolean(proficiencyComponents[49]),
        perception: Boolean(proficiencyComponents[50]),
        survival: Boolean(proficiencyComponents[51]),
        deception: Boolean(proficiencyComponents[52]),
        intimidation: Boolean(proficiencyComponents[53]),
        performance: Boolean(proficiencyComponents[54]),
        persuasion: Boolean(proficiencyComponents[55])
      },
      skillHalfProficiencies: {
        athletics: Boolean(proficiencyComponents[57]),
        acrobatics: Boolean(proficiencyComponents[58]),
        slightOfHand: Boolean(proficiencyComponents[59]),
        stealth: Boolean(proficiencyComponents[60]),
        arcana: Boolean(proficiencyComponents[61]),
        history: Boolean(proficiencyComponents[62]),
        investigation: Boolean(proficiencyComponents[63]),
        nature: Boolean(proficiencyComponents[64]),
        religion: Boolean(proficiencyComponents[65]),
        animalHandling: Boolean(proficiencyComponents[66]),
        insight: Boolean(proficiencyComponents[67]),
        medicine: Boolean(proficiencyComponents[68]),
        perception: Boolean(proficiencyComponents[69]),
        survival: Boolean(proficiencyComponents[70]),
        deception: Boolean(proficiencyComponents[71]),
        intimidation: Boolean(proficiencyComponents[72]),
        performance: Boolean(proficiencyComponents[73]),
        persuasion: Boolean(proficiencyComponents[74])
      },
      skillHalfProficienciesRoundedUp: {
        athletics: Boolean(proficiencyComponents[76]),
        acrobatics: Boolean(proficiencyComponents[77]),
        slightOfHand: Boolean(proficiencyComponents[78]),
        stealth: Boolean(proficiencyComponents[79]),
        arcana: Boolean(proficiencyComponents[80]),
        history: Boolean(proficiencyComponents[81]),
        investigation: Boolean(proficiencyComponents[82]),
        nature: Boolean(proficiencyComponents[83]),
        religion: Boolean(proficiencyComponents[84]),
        animalHandling: Boolean(proficiencyComponents[85]),
        insight: Boolean(proficiencyComponents[86]),
        medicine: Boolean(proficiencyComponents[87]),
        perception: Boolean(proficiencyComponents[88]),
        survival: Boolean(proficiencyComponents[89]),
        deception: Boolean(proficiencyComponents[90]),
        intimidation: Boolean(proficiencyComponents[91]),
        performance: Boolean(proficiencyComponents[92]),
        persuasion: Boolean(proficiencyComponents[93])
      },
      skillMiscBonus: {
        athletics: parseInt(proficiencyComponents[19]),
        acrobatics: parseInt(proficiencyComponents[20]),
        slightOfHand: parseInt(proficiencyComponents[21]),
        stealth: parseInt(proficiencyComponents[22]),
        arcana: parseInt(proficiencyComponents[23]),
        history: parseInt(proficiencyComponents[24]),
        investigation: parseInt(proficiencyComponents[25]),
        nature: parseInt(proficiencyComponents[26]),
        religion: parseInt(proficiencyComponents[27]),
        animalHandling: parseInt(proficiencyComponents[28]),
        insight: parseInt(proficiencyComponents[29]),
        medicine: parseInt(proficiencyComponents[30]),
        perception: parseInt(proficiencyComponents[31]),
        survival: parseInt(proficiencyComponents[32]),
        deception: parseInt(proficiencyComponents[33]),
        intimidation: parseInt(proficiencyComponents[34]),
        performance: parseInt(proficiencyComponents[35]),
        persuasion: parseInt(proficiencyComponents[36])
      },
    }
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
    characterLevel: getCharacterLevel(getData("classData").split('⊟')[0]),
    resources: getData("classData").split('⊟')[2].split('⊠'),
    feats: getData("classData").split('⊟')[3].split('⊠'),
    asi: getData("classData").split('⊟')[4].split('⊡'),
    race: getData("classData").split('⊟')[7],
    // raceLabel: getData("classData").split('⊟')[8],
    // background: getData("classData").split('⊟')[9],

    weaponList: parseWeapons(getData("weaponList")),

    abilityScores: parseAbilityScores(getData("abilityScores")),
    skillInfo: parseSkillInfo(getData("skillInfo")),

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
