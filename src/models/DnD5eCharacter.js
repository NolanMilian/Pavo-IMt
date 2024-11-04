export default function DnD5eCharacter() {
  // Generic Data
  this.id = ''; // firebase id
  this.game = 'DnD5e';
  this.campaignName = '';
  this.campaignId = '';
  this.name = 'Elalen Gianninnant';
  this.health = {max: 0, total: 0, temp: 0}

  // DnD5e Specific Data
  this.race = 'Elf';
  this.subrace = 'High Elf'
  this.background = 'Sage';
  this.rolledStats = [[16,14,18,12,9,10],[18,18,15,8,6,12]];
  this.assignedStats = {str: 10, dex: 12, con: 14, wis: 16, int: 18, cha: 9};
  this.adjustedStats = {str: 10, dex: 12, con: 14, wis: 16, int: 18, cha: 9};
  this.skills = [
    {prof: 'not proficient', mod: 'dex', skill: 'acrobatics', bonus: '+3'},
  ]
  this.movementSpeed = [{type: 'Walking', speed: 30}];
  this.inspiration = false;
  this.classes =
    [
      {
        className: 'Wizard',
        subClass: '',
        classLevel: 1,
        hit_die: 6,
      },
      {
        className: 'Wizard',
        subClass: '',
        classLevel: 2,
        hit_die: 6,
      },
    ];
  const modifier = function (score) {
    let mod = Math.floor((score - 10) / 2);
    return mod > 0 ? '+' + mod : mod;
  }
  const level = function(classes) {
    return classes.classLevel.reduce((acc, curr) => acc + curr.classLevel, 0);
  };
}
DnD5eCharacter.type = 'DnD5e';

