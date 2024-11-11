import {auth, db} from "boot/firebase";

export default function User() {
  // this.selectedCharacter = null;
  this.allCharacters = [];

  const getCharacters = () => {
    // auth.currentUser.uid
    let characters = [];
    db.collection(`users/${auth.currentUser.uid}/characters/`).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        this.allCharacters.push({id: doc.id, data: doc.data()});
        characters.push({id: doc.id, data: doc.data()});
      })
    })
    return characters;
  }
  // const selectCharacter = (characterId) => {
  //   return this.allCharacters.find(c => c.id === characterId);
  // }
}
