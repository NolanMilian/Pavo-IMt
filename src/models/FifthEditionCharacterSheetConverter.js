export default function fifthEditionCharacterSheetConverter(xmlData) {
  const character = xmlData.getElementsByTagName('character')[0];
  return {
    gameType: 'dnd5e',
    initMiscMod: parseInt(character.getElementsByTagName("initMiscMod")[0].childNodes[0].nodeValue),
    improvedInitiative: parseInt(character.getElementsByTagName("improvedInitiative")[0].childNodes[0].nodeValue),
    currentHealth: parseInt(character.getElementsByTagName("currentHealth")[0].childNodes[0].nodeValue),
    maxHealth: parseInt(character.getElementsByTagName("maxHealth")[0].childNodes[0].nodeValue),
    currentTempHP: parseInt(character.getElementsByTagName("currentTempHP")[0].childNodes[0].nodeValue),
    armorBonus: parseInt(character.getElementsByTagName("armorBonus")[0].childNodes[0].nodeValue),
    shieldBonus: parseInt(character.getElementsByTagName("shieldBonus")[0].childNodes[0].nodeValue),
    miscArmorBonus: parseInt(character.getElementsByTagName("miscArmorBonus")[0].childNodes[0].nodeValue),
    maxDex: parseInt(character.getElementsByTagName("maxDex")[0].childNodes[0].nodeValue),
    proficiencyBonus: parseInt(character.getElementsByTagName("proficiencyBonus")[0].childNodes[0].nodeValue),
    miscSpellAttackBonus: parseInt(character.getElementsByTagName("miscSpellAttackBonus")[0].childNodes[0].nodeValue),
    miscSpellDCBonus: parseInt(character.getElementsByTagName("miscSpellDCBonus")[0].childNodes[0].nodeValue),
    castingStatCode: parseInt(character.getElementsByTagName("castingStatCode")[0].childNodes[0].nodeValue),
    offenseAbilityDisplay: parseInt(character.getElementsByTagName("offenseAbilityDisplay")[0].childNodes[0].nodeValue),
    deathSaveSuccesses: parseInt(character.getElementsByTagName("deathSaveSuccesses")[0].childNodes[0].nodeValue),
    deathSaveFailures: parseInt(character.getElementsByTagName("deathSaveFailures")[0].childNodes[0].nodeValue),
    showDeathSaves: character.getElementsByTagName("showDeathSaves")[0].childNodes[0].nodeValue === 'true',
    baseSpeed: parseInt(character.getElementsByTagName("baseSpeed")[0].childNodes[0].nodeValue),
    speedMiscMod: parseInt(character.getElementsByTagName("speedMiscMod")[0].childNodes[0].nodeValue),
    movementMode: character.getElementsByTagName("movementMode")[0].childNodes[0].nodeValue,
    raceCode: parseInt(character.getElementsByTagName("raceCode")[0].childNodes[0].nodeValue),
    subraceCode: parseInt(character.getElementsByTagName("subraceCode")[0].childNodes[0].nodeValue),
    backgroundCode: parseInt(character.getElementsByTagName("backgroundCode")[0].childNodes[0].nodeValue),
    unarmoredDefense: parseInt(character.getElementsByTagName("unarmoredDefense")[0].childNodes[0].nodeValue),
    // featCode: character.getElementsByTagName("featCode")[0].childNodes[0].nodeValue,
    classData: character.getElementsByTagName("classData")[0].childNodes[0].nodeValue.split('⊟'),
    // multiclassFeatures: character.getElementsByTagName("multiclassFeatures")[0].childNodes[0].nodeValue,
    weaponList: character.getElementsByTagName("weaponList")[0].childNodes[0].nodeValue.split('⊠'),
    abilityScores: character.getElementsByTagName("abilityScores")[0].childNodes[0].nodeValue.split('⊠'),
    skillInfo: character.getElementsByTagName("skillInfo")[0].childNodes[0].nodeValue.split('⊠'),
    spellList: character.getElementsByTagName("spellList")[0].childNodes[0].nodeValue.split('⊠'),
    noteList: character.getElementsByTagName("noteList")[0].childNodes[0].nodeValue.split('⊠'),
    hitDiceList: character.getElementsByTagName("hitDiceList")[0].childNodes[0].nodeValue.split('⊠'),
    classResource: character.getElementsByTagName("classResource")[0].childNodes[0].nodeValue.split('⊠'),
  };
  // let classData = xmlDoc.querySelector("classData").split()
  //
  // return {
  //   gameType: 'dnd5e',
  //   name: xmlDoc.querySelector(""),
  //   health: {
  //     current: xmlDoc.querySelector("currentHealth"),
  //     max: xmlDoc.querySelector("maxHealth"),
  //     temp: xmlDoc.querySelector("currentTempHP")
  //   },
  //   armorBonus: xmlDoc.querySelector("armorBonus"),
  //   miscArmorBonus: xmlDoc.querySelector("miscArmorBonus"),
  //   shieldBonus: xmlDoc.querySelector("shieldBonus"),
  //   maxDex: xmlDoc.querySelector("maxDex"),
  // }
}
