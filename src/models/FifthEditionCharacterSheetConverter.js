export default function fifthEditionCharacterSheetConverter(xmlData) {
  const character = xmlData.getElementsByTagName('character')[0];

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

  return {
    gameType: 'dnd5e',
    initMiscMod: parseInt(character.getElementsByTagName("initMiscMod")[0].childNodes[0].nodeValue),
    improvedInitiative: parseInt(character.getElementsByTagName("improvedInitiative")[0].childNodes[0].nodeValue),
    health: {
      current: parseInt(character.getElementsByTagName("currentHealth")[0].childNodes[0].nodeValue),
      max: parseInt(character.getElementsByTagName("maxHealth")[0].childNodes[0].nodeValue),
      temp: parseInt(character.getElementsByTagName("currentTempHP")[0].childNodes[0].nodeValue),
    },
    armorBonus: parseInt(character.getElementsByTagName("armorBonus")[0].childNodes[0].nodeValue),
    shieldBonus: parseInt(character.getElementsByTagName("shieldBonus")[0].childNodes[0].nodeValue),
    miscArmorBonus: parseInt(character.getElementsByTagName("miscArmorBonus")[0].childNodes[0].nodeValue),

    maxDex: parseInt(character.getElementsByTagName("maxDex")[0].childNodes[0].nodeValue),

    proficiencyBonus: parseInt(character.getElementsByTagName("proficiencyBonus")[0].childNodes[0].nodeValue),

    miscSpellAttackBonus: parseInt(character.getElementsByTagName("miscSpellAttackBonus")[0].childNodes[0].nodeValue),
    miscSpellDCBonus: parseInt(character.getElementsByTagName("miscSpellDCBonus")[0].childNodes[0].nodeValue),
    castingStatCode: parseInt(character.getElementsByTagName("castingStatCode")[0].childNodes[0].nodeValue),

    offenseAbilityDisplay: parseInt(character.getElementsByTagName("offenseAbilityDisplay")[0].childNodes[0].nodeValue),
    // deathSaveSuccesses: parseInt(character.getElementsByTagName("deathSaveSuccesses")[0].childNodes[0].nodeValue),
    // deathSaveFailures: parseInt(character.getElementsByTagName("deathSaveFailures")[0].childNodes[0].nodeValue),
    // showDeathSaves: character.getElementsByTagName("showDeathSaves")[0].childNodes[0].nodeValue === 'true',

    movementSpeed: {
      activeMovementSpeed: 'walking',
      walking: parseInt(character.getElementsByTagName("baseSpeed")[0].childNodes[0].nodeValue) + parseInt(character.getElementsByTagName("speedMiscMod")[0].childNodes[0].nodeValue),
      walkingNotes: '',
      climbing: 0,
      climbingNotes: '',
      swimming: 0,
      flying: 0,
      burrowing: 0
    },
    // baseSpeed: parseInt(character.getElementsByTagName("baseSpeed")[0].childNodes[0].nodeValue),
    // speedMiscMod: parseInt(character.getElementsByTagName("speedMiscMod")[0].childNodes[0].nodeValue),
    // movementMode: character.getElementsByTagName("movementMode")[0].childNodes[0].nodeValue,

    // raceCode: parseInt(character.getElementsByTagName("raceCode")[0].childNodes[0].nodeValue),
    // subraceCode: parseInt(character.getElementsByTagName("subraceCode")[0].childNodes[0].nodeValue),
    // backgroundCode: parseInt(character.getElementsByTagName("backgroundCode")[0].childNodes[0].nodeValue),

    unarmoredDefense: parseInt(character.getElementsByTagName("unarmoredDefense")[0].childNodes[0].nodeValue),

    // featCode: character.getElementsByTagName("featCode")[0].childNodes[0].nodeValue,

    classData: character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟⊟'),

    // multiclassFeatures: character.getElementsByTagName("multiclassFeatures")[0].childNodes[0].nodeValue,

    weaponList: parseWeapons(character.getElementsByTagName("weaponList")[0].childNodes[0].nodeValue),

    abilityScores: character.getElementsByTagName("abilityScores")[0].childNodes[0].nodeValue.split('⊠'),
    skillInfo: character.getElementsByTagName("skillInfo")[0].childNodes[0].nodeValue.split('⊠'),

    spellList: character.getElementsByTagName("spellList")[0].childNodes[0].nodeValue.split('⊠'),

    // noteList: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠'),
    features: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[0],
    armorProficiencies: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[1].split("\n"),
    weaponProficiencies: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[2].split("\n"),
    toolProficiencies: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[3].split("\n"),
    languagesKnown: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[4].split("\n"),
    equipment: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[5].split("\n"),
    notes: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[6],
    class: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[7],
    race: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠')[8],
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
