export default function Character(name, race, classes, background) {
  // Object data
  this.id = ''; // firebase id
  this.name = name || 'New Character Name';
  this.race = race || 'Human';
  this.classes = classes || [
    {
      className: 'Acolyte',
      subClass: '',
      classLevel: 0
    },
  ]
  this.background = background || 'Sage';
  [].reduce()
  const level = function(classes) {
    let lvl = 0;
    lvl += classes.map(l => l.classLevel)
    return lvl;
  } || 0;
}
