import { defineStore } from 'pinia'
import { db } from "boot/firebase";
import Character from "src/models/Character";
import {useAuthStore} from "stores/auth-store";

export const useUserStore = defineStore('user', {
  state: () => ({
    activeCharacter: {},
    allCharacters: [],
  }),

  actions: {
    characterById(characterId) {
      db.doc(`users/${useAuthStore().authUser.uid}/characters/${characterId}`)
        .get()
        .then((doc) => {
          console.log(doc.id, '=>', doc.data())
        })

    },

    activateCharacter(characterId) {
      db
        .doc(`users/${useAuthStore().authUser.uid}/characters/${characterId}`)
        .onSnapshot((doc) => {
          this.activeCharacter = new Character(doc.id, doc.data());
        })
      // console.log('active character', this.activeCharacter);
    },

    getCharacters() {
      this.allCharacters = [];
      db
        // .collection(`users/${auth.currentUser.uid}/characters/`)
        .collection(`users/${useAuthStore().authUser.uid}/characters/`)
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
        .collection(`users/${useAuthStore().authUser.uid}/characters/`)
        .add(characterObj)
        .then((docRef) => {
          console.log('Character written with ID of: ', docRef.id);
          this.getCharacters();
        }).catch((error) => {
          console.error('Error adding document: ', error);
      })
    },

    deleteCharacter(characterId) {
      db
        .collection(`users/${useAuthStore().authUser.uid}/characters/`)
        .doc(characterId)
        .delete()
        .then(() => {
          console.log('Character deleted');
          this.getCharacters();
        }).catch((error) => {
          console.error('Error removing character', error);
      })
    },

    updateCharacterVariable(character, variable, data) {
      db
        .doc(`users/${useAuthStore().authUser.uid}/characters/${characterId}`)
        .update({})
        .then(() => console.log('Document updated'))
    },

    toggleCharacterVariable(character, variable) {
      let fieldValue = character[variable]
      console.log('filedValue',fieldValue)
      db
        .doc(`users/${useAuthStore().authUser.uid}/characters/${character.id}`)
        .update({
          [variable]: !fieldValue,
        })
        .then(() =>
          console.log(`Character: ${character.name}, fieldValue updated: ${variable}, to: ${!fieldValue}`),
        )
        .catch((error) => console.error(`Error toggling ${variable} in document`, error))
    },



  },

  getters: {
  }
})
