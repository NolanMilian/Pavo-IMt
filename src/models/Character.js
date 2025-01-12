// import firebase from "firebase";

export default function Character(id, data) {
  id = id ?? '';
  data = data ?? {};

  return {
    id: id,
    gameType: data.gameType ?? '',
    campaignName: data.campaignName ?? '',
    favorite: data.favorite ?? false,
    name: data.name ?? '',
    race: data.race ?? '',
    level: data.level ?? '',
    classData: data.classData ?? {
      classLevelString: '',
      classString: '',
      classes: [
        {
          className: '',
          classLevel: 1,
        },
      ],
      get ClassLevels(){
        return null;
      },
    },
    get getLevel() {
      return this.classData.classes.length;
    },
    // creationDate: data.creationDate ?? firebase.firestore.FieldValue.serverTimestamp(),
    // updateDate: firebase.firestore.FieldValue.serverTimestamp(),

  }
}
