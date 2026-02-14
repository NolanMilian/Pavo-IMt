export default function fifthEditionCharacterSheetConverter(xmlData) {
  const character = xmlData.getElementsByTagName('character')[0];

  function getData(tagNameString){
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
    // const classCount = parseInt(classComponents);

    let classLevel = 0;

    // for (let i = 0; i < classCount; i++) {
    //   const classLevel = classComponents[i].split('⊡')[2];
    // }

    for (const value of classComponents) {
      classLevel += value.split('⊡')[2];
    }

    return classLevel;
  }

  function parseClasses(classString) {
    const classComponents = classString.split('⊠');
    // const classCount = parseInt(classComponents);

    let classes = [];
    // let classLevel = 0;

    // for (let i = 0; i < classCount; i++) {
    //   const className = classComponents[i].split('⊡')[0];
    //   const subclassName = classComponents[i].split('⊡')[1];
    //   const level = classComponents[i].split('⊡')[2];
    //   classes.push([className, subclassName, level]);
    // }

    for (const value of classComponents) {
      const className = value.split('⊡')[0];
      const subclassName = value.split('⊡')[1];
      const level = value.split('⊡')[2];
      classes.push([className, subclassName, level]);
    }

    return classes;
  }

  function parseAbilityScores(abilityScoresString){
    const abilityScoresComponents = abilityScoresString.split('⊠');
    let baseAbilityScores = {};
    baseAbilityScores.str = abilityScoresComponents[0];
    baseAbilityScores.dex = abilityScoresComponents[1];

  }

  function parseSkillInfo(skillInfoString){}

  return {
    gameType: 'dnd5e',

    initMiscMod: parseInt(getData("initMiscMod")),
    improvedInitiative: parseInt(character.getElementsByTagName("improvedInitiative")[0].childNodes[0].nodeValue),

    health: {
      current: parseInt(character.getElementsByTagName("currentHealth")[0].childNodes[0].nodeValue),
      max: parseInt(character.getElementsByTagName("maxHealth")[0].childNodes[0].nodeValue),
      temp: parseInt(character.getElementsByTagName("currentTempHP")[0].childNodes[0].nodeValue),
    },

    armorBonus: parseInt(character.getElementsByTagName("armorBonus")[0].childNodes[0].nodeValue),
    shieldBonus: parseInt(character.getElementsByTagName("shieldBonus")[0].childNodes[0].nodeValue),
    miscArmorBonus: parseInt(character.getElementsByTagName("miscArmorBonus")[0].childNodes[0].nodeValue),
    unarmoredDefense: parseInt(character.getElementsByTagName("unarmoredDefense")[0].childNodes[0].nodeValue),

    maxDex: parseInt(character.getElementsByTagName("maxDex")[0].childNodes[0].nodeValue),

    proficiencyBonus: parseInt(character.getElementsByTagName("proficiencyBonus")[0].childNodes[0].nodeValue),
    miscSpellAttackBonus: parseInt(character.getElementsByTagName("miscSpellAttackBonus")[0].childNodes[0].nodeValue),
    miscSpellDCBonus: parseInt(character.getElementsByTagName("miscSpellDCBonus")[0].childNodes[0].nodeValue),

    castingStatCode: parseInt(character.getElementsByTagName("castingStatCode")[0].childNodes[0].nodeValue),

    // deathSaveSuccesses: parseInt(character.getElementsByTagName("deathSaveSuccesses")[0].childNodes[0].nodeValue), // not needed
    // deathSaveFailures: parseInt(character.getElementsByTagName("deathSaveFailures")[0].childNodes[0].nodeValue), // not needed
    // showDeathSaves: character.getElementsByTagName("showDeathSaves")[0].childNodes[0].nodeValue === 'true', // not needed
    // raceCode: parseInt(character.getElementsByTagName("raceCode")[0].childNodes[0].nodeValue), // not used
    // subraceCode: parseInt(character.getElementsByTagName("subraceCode")[0].childNodes[0].nodeValue), // not used
    // backgroundCode: parseInt(character.getElementsByTagName("backgroundCode")[0].childNodes[0].nodeValue), // not used
    // featCode: character.getElementsByTagName("featCode")[0].childNodes[0].nodeValue, // not used
    // multiclassFeatures: character.getElementsByTagName("multiclassFeatures")[0].childNodes[0].nodeValue, // not used

    offenseAbilityDisplay: parseInt(character.getElementsByTagName("offenseAbilityDisplay")[0].childNodes[0].nodeValue),

    // baseSpeed: parseInt(character.getElementsByTagName("baseSpeed")[0].childNodes[0].nodeValue), // Implemented in movement speed
    // speedMiscMod: parseInt(character.getElementsByTagName("speedMiscMod")[0].childNodes[0].nodeValue), // Implemented in movement speed
    // movementMode: character.getElementsByTagName("movementMode")[0].childNodes[0].nodeValue, // Implemented in movement speed
    movementSpeed: {
      activeMovementSpeed: 'walking',
      walking: parseInt(character.getElementsByTagName("baseSpeed")[0].childNodes[0].nodeValue) + parseInt(character.getElementsByTagName("speedMiscMod")[0].childNodes[0].nodeValue),
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

    classData: parseClasses(character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟')[0]),
    characterLevel: parseCharacterLevel(character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟')[0]),
    resources: character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟')[2].split('⊠'),
    feats: character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟')[3].split('⊠'),
    asi: character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟')[4].split('⊡'),
    race: character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟')[7],
    // raceLabel: character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟')[8],
    // background: character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟')[9],

    weaponList: parseWeapons(character.getElementsByTagName("weaponList")[0].childNodes[0].nodeValue),

    abilityScores: parseAbilityScores(character.getElementsByTagName("abilityScores")[0].childNodes[0].nodeValue),
    skillInfo: character.getElementsByTagName("skillInfo")[0].childNodes[0].nodeValue.split('⊠'),

    spellList: character.getElementsByTagName("spellList")[0].childNodes[0].nodeValue.split('⊠'),

    // noteList: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠'), // Implemented in all options below
    features: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[0],
    armorProficiencies: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[1].split("\n"),
    weaponProficiencies: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[2].split("\n"),
    toolProficiencies: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[3].split("\n"),
    languagesKnown: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[4].split("\n"),
    equipment: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[5].split("\n"),
    notes: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[6],
    classLabel: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[7],
    raceLabel: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[8],
    background: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[9],
    alignment: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[10],
    personalityTraits: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[11],
    ideals: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[12],
    bonds: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[13],
    flaws: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[14],
    name: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[15],
    classAgain: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[16],
    cp: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[17],
    sp: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[18],
    ep: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[19],
    gp: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[20],
    pp: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[21],
    experience: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[22],

    hitDiceList: character.getElementsByTagName("hitDiceList")[0].childNodes[0].nodeValue.split('⊠'),

    classResource: character.getElementsByTagName("classResource")[0].childNodes[0].nodeValue.split('⊠'),
  };
}
