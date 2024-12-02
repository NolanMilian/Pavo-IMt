import BaseCharacter from "src/models/BaseCharacter";

export default function DnD5eCharacter() {
  // Generic Data
  this.id = ''; // firebase id
  this.game = 'DnD5e';
  this.campaignName = '';
  this.campaignId = '';
  this.name = 'Elalen Gianninnant';
  this.health = {max: 0, total: 0, temp: 0}

  // DnD5e Specific Data
  this.race = 'High Elf';
  // this.subrace = 'High Elf'
  this.level = 2;
  this.background = 'Sage';
  this.rolledStats = [[16,14,18,12,9,10],[18,18,15,8,6,12]];
  this.assignedStats = {str: 10, dex: 12, con: 14, wis: 16, int: 18, cha: 9};
  this.adjustedStats = {str: 10, dex: 12, con: 14, wis: 16, int: 18, cha: 9};
  this.skills = [
    {prof: 'not proficient', mod: 'dex', skill: 'acrobatics', bonus: '+3'},
  ]
  this.movementSpeed = [{type: 'Walking', speed: 30}];
  this.inspiration = false;
  this.class = {
    classes: [
      {
        className: 'Wizard',
        classLevel: 1,
        hit_die: 6,
      },
      {
        className: 'Wizard',
        subClass: '',
        classLevel: 2,
        hit_die: 6,
      },
    ],
    get totalLevel() {
      return this.classes.length;
    },
    get ClassLevels(){
      return null;
    },
  }
  // const modifier = function (score) {
  //   let mod = Math.floor((score - 10) / 2);
  //   return mod > 0 ? '+' + mod : mod;
  // }
  // const level = function(classes) {
  //   return classes.classLevel.reduce((acc, curr) => acc + curr.classLevel, 0);
  // };
}
DnD5eCharacter.type = 'DnD5e';

// export default class DnD5eCharacter extends BaseCharacter{
//   static type = 'DnD5e';
//   get type() {
//     return DnD5eCharacter.type;
//   }
//   // Generic Data
//   // id = ''; // firebase id
//   // game = 'DnD5e';
//   // campaignName = '';
//   // campaignId = '';
//   name = '';
//   // health = {max: 0, total: 0, temp: 0}
//   //
//   // // DnD5e Specific Data
//   // race = 'High Elf';
//   // // this.subrace = 'High Elf'
//   // level = 2;
//   // background = 'Sage';
//   // rolledStats = [[16,14,18,12,9,10],[18,18,15,8,6,12]];
//   // assignedStats = {str: 10, dex: 12, con: 14, wis: 16, int: 18, cha: 9};
//   // adjustedStats = {str: 10, dex: 12, con: 14, wis: 16, int: 18, cha: 9};
//   // skills = [
//   //   {prof: 'not proficient', mod: 'dex', skill: 'acrobatics', bonus: '+3'},
//   // ]
//   // movementSpeed = [{type: 'Walking', speed: 30}];
//   // inspiration = false;
//   // classes =
//   //   [
//   //     {
//   //       className: 'Wizard',
//   //       subClass: '',
//   //       classLevel: 1,
//   //       hit_die: 6,
//   //     },
//   //     {
//   //       className: 'Wizard',
//   //       subClass: 'transmutation',
//   //       classLevel: 2,
//   //       hit_die: 6,
//   //     },
//   //     {
//   //       className: 'Wizard',
//   //       subClass: 'transmutation',
//   //       classLevel: 3,
//   //       hit_die: 6,
//   //     },
//   //   ];
//   // // const modifier = function (score) {
//   // //   let mod = Math.floor((score - 10) / 2);
//   // //   return mod > 0 ? '+' + mod : mod;
//   // // }
//   // get level() {
//   //   return this.classes.classLevel.reduce((acc, curr) => acc + curr.classLevel, 0);
//   // };
// }
