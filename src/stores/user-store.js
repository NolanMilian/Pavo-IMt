import { defineStore } from 'pinia'
import { db, auth } from "boot/firebase";
import Character from "src/models/Character";

export const useUserStore = defineStore('user', {
  state: () => ({
    activeCharacter: null,
    allCharacters: [],
  }),

  actions: {
    selectCharacter(characterId) {
      db
        .collection(`users/${auth.currentUser.uid}/characters/`)
        .doc(characterId)
        .onSnapshot((doc) => {
          // this.activeCharacter = new Character(doc.id, doc.data());
          this.activeCharacter = new Character(doc.id, doc.data());
        })
      console.log('active character', this.activeCharacter);
      // this.activeCharacter = this.allCharacters.find(c => c.id === characterId) // RNbVeJj4rr5c55j93EZE
    },

    getCharacters() {
      // const authId = auth.currentUser.uid; //Gwfv6nHoxQQl7aE8RMB9LsiuC6h1
      this.allCharacters = [];
      db
        .collection(`users/${auth.currentUser.uid}/characters/`)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          this.allCharacters.push(new Character(doc.id, doc.data()));
        })

      }).catch((error) => {
        console.error('Error retrieving collection from firestore', error);
      })
      console.log('array of characters', this.allCharacters);
    },

    addCharacter(characterObj) {
      db
        .collection(`users/${auth.currentUser.uid}/characters/`)
        .add(characterObj)
        .then((docRef) => {
          console.log('Character written with ID of: ', docRef.id);
          this.getCharacters();
        }).catch((error) => {
          console.error('Error adding document: ', error);
      })
    },

    deleteCharacter(character) {
      db
        .collection(`users/${auth.currentUser.uid}/characters/`)
        .doc(character.id)
        .delete()
        .then(() => {
          console.log('Character deleted');
          this.getCharacters();
        }).catch((error) => {
          console.error('Error removing character', error);
      })
    },

  },

  getters: {
  }
})
