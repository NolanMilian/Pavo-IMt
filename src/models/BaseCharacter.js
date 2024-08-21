// export default class BaseCharacter {
//   // Object data
//
//   id = ''; // firebase id
//   health = {max: 0, total: 0, temp: 0}
//   name = 'New DnD5eCharacter Name';
//   race = 'Human';
//   classes = [
//     {
//       className: 'Acolyte',
//       subClass: '',
//       classLevel: 0
//     },
//   ]
//   background = 'Sage';
//   get level() {
//     return this.classes.reduce((acc, curr) => acc + curr.classLevel, 0);
//   };
//   campaignId = '';
// }


// export default function BaseCharacter(name, race, classes, background) {
//   // Object data
//   this.id = ''; // firebase id
//   this.health = {max: 0, total: 0, temp: 0}
//   this.rolledStats = [[16,14,18,12,9,10],[18,18,15,8,6,12]]
//   this.assignedStats = {int: 18, wis: 16, con: 14, cha: 9, dex: 12, str: 10}
//   this.name = name || 'New DnD5eCharacter Name';
//   this.race = race || 'Human';
//   this.classes = classes || [
//     {
//       className: 'Acolyte',
//       subClass: '',
//       classLevel: 0
//     },
//   ]
//   this.background = background || 'Sage';
//   const level = function(classes) {
//     return classes.classLevel.reduce((acc, curr) => acc + curr.classLevel, 0);
//   } || 0;
//   this.campaignId = '';
// }
