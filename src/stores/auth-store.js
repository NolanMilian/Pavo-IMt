import {defineStore} from "pinia";
import { auth } from 'boot/firebase'
import AuthUser from 'src/models/AuthUser'
import firebase from "firebase";

/*
  This is in case I want to use https://github.com/prazdevs/pinia-plugin-persistedstate
*/

export const useAuthStore = defineStore('auth',{
  state: () => ({
    authUser: null,
  }),
  actions:{
    setUser(user) {
      this.authUser = user;
    },

    async signInWithEmailAndPassword(email, password) {
      try {
        this.authUser = await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.error('Error with signIn using email and password', error);
      }
    },

    async signOut() {
      try {
        await auth.signOut();
        this.authUser = null;
      } catch (error) {
        console.error('Error during signOut', error);
      }
    },

    async signInWithPopup() {
      let provider = new firebase.auth.GoogleAuthProvider();
      try {
        await auth.signInWithPopup(provider);
      } catch (error) {
        console.error('Error during signInWithPopup', error);
      }
    },

    init() {
        auth
          .onAuthStateChanged(user => {
            this.setUser(user ? new AuthUser(user) : null);
          })
    },

     registerUser(credentials) {
      console.log('registerUser action', credentials)
      firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    },

  },
  getters: {

  },
})
