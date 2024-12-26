import firebase from "firebase";

export default function Character(id, data) {
  id = id ?? '';
  data = data ?? {};

  return {
    id: id,
    gameType: data.gameType ?? 'DnD5e',
    favorite: data.favorite ?? false,
    name: data.name ?? '',
    race: data.race ?? '',
    classData: data.classData ?? {
      classes: [
        {
          className: '',
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
    },
    // creationDate: data.creationDate ?? firebase.firestore.FieldValue.serverTimestamp(),
    // updateDate: firebase.firestore.FieldValue.serverTimestamp(),

  }
}
