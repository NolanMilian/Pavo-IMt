const proficiencyValues = { notProficient: 0, halfProficient: 2, proficient: 5, doubleProficient: 10 };
const scoreTypes = { str: 'strength', dex: 'dexterity', con: 'constitution', int: 'intelligence', wis = 'wisdom', cha = 'charisma' };
const resistantTypes = [  
    'Acid', 
    'Bludgeoning', 
    'Bludgeoning from non magical attacks', 
    'cold', 
    'damage dealt by traps', 
    'damage from spells', 
    'Damage of the type matching the animated breath\'s form (acid, cold, fire, lightning, or poison)', 
    'fire', 
    'force', 
    'lightning', 
    'Lightning (granted by darksteel greataxe)', 
    'necrotic', 
    'One of the following: acid, cold, fire, lightning, or poison', 
    'piercing', 
    'poison', 
    'psychic', 
    'Psychic (granted by Ruidium Armor)', 
    'radiant', 
    'ranged attacks', 
    'slashing', 
    'thunder' 
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
    athletics: {skillType: 'str' }, 
    acrobatics: { skillType: 'dex' },
    slightOfHand: { skillType: 'dex' },
    stealth: { skillType: 'dex' },
    arcana: { skillType: 'int' },
    history: { skillType: 'int' },
    investigation: { skillType: 'int' },
    nature: { skillType: 'int' },
    religion: { skillType: 'int' },
    animalHandling: { skillType: 'wis' },
    insight: { skillType: 'wis' },
    medicine: { skillType: 'wis' },
    perception: { skillType: 'wis' },
    survival: { skillType: 'wis' },
    deception: { skillType: 'cha' },
    intimidation: { skillType: 'cha' },
    performance: { skillType: 'cha' },
    persuasion: { skillType: 'cha' }
};

export { proficiencyValues, scoreTypes, damageTypes, skills };