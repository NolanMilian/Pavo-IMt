import { defineStore } from 'pinia'
import { db, storage } from "boot/firebase";
import Character from "src/models/Character";
import {useAuthStore} from "stores/auth-store";

/*
 * Character Store: Manages the state and actions related to character data, such as creating, updating, and retrieving character information.
 */

export const useCharacterStore = defineStore('character', {
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
        .onSnapshot((querySnapshot) => {
          this.allCharacters.length = 0;
          querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          this.allCharacters.push(new Character(doc.id, doc.data()));
        })
      })
      //   .catch((error) => {
      //   console.error('Error retrieving collection from firestore', error);
      // })
      // console.log('array of characters', this.allCharacters);
    },

    addCharacter(characterObj) {
      let characterId = '';
      db
        .collection(`users/${useAuthStore().authUser.uid}/characters/`)
        .add(characterObj)
        .then((docRef) => {
          console.log('Character written with ID of: ', docRef.id);
          characterId = docRef.id;
          this.activateCharacter(characterId)
          // this.getCharacters();
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
      })
      return characterId;
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

    //TODO: make update and toggle both use the characterId instead of the whole object

    updateCharacterVariable(characterId, variable, data) {
      // let characterId;
      // if (character.id !== null)
      //   characterId = character.id
      // else
      //   characterId = character
      db
        .doc(`users/${useAuthStore().authUser.uid}/characters/${characterId}`)
        .update({
          [variable]: data
        })
        .then(() => console.log(`Character: ${characterId} document updated variable: ${variable}, with data: ${data}`))
        .catch((error) => console.error(`Error updating ${variable}, with data: ${data}`, error))
    },

    toggleCharacterVariable(character, variable) {
      let fieldValue = character[variable]
      console.log('filedValue',fieldValue)
      db
        .doc(`users/${useAuthStore().authUser.uid}/characters/${character.id}`)
        .update({
          [variable]: !fieldValue,
        })
        .then(() => console.log(`Character: ${character.name}, fieldValue updated: ${variable}, to: ${!fieldValue}`))
        .catch((error) => console.error(`Error toggling ${variable} in document`, error))
    },

    uploadCharacterAvatar(characterId, file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      let avatarURL = null;

      fileRef.put(file)
        .then(snapshot => {
          // Get the download URL
          snapshot.ref.getDownloadURL()
            .then(downloadURL => {
              // Store the downloadURL in Firestore or perform any other action
              db.collection('uploads').add({ downloadURL });
              avatarURL = downloadURL;
            });
        })
        .then(
          setTimeout(() => {
            // we're done, we reset loading state
            this.uploadingState = false
            this.uploadDialog = false
          }, 1000)
        )
        .catch(error => {
          console.error('Error uploading file:', error);
        });

      return avatarURL;
    },


  },

  getters: {
    isCreated(state) {
      return !!state.activeCharacter.race && !!state.activeCharacter.classData && !!state.activeCharacter.abilityScores;

    }
  }
})
