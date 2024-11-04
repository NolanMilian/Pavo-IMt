import {defineStore} from "pinia";
import { auth } from 'boot/firebase'
import AuthUser from 'src/models/AuthUser'
import firebase from "firebase";

export const useAuthStore = defineStore('auth',{
  state: () => ({
    authUser: null,
  }),
  actions: () => ({
    init() {
      auth
        .onAuthStateChanged(user => {
          if (user) {
            this.authUser = new AuthUser(user);
          } else {
            this.authUser = null;
          }
          console.log('logged in as: ', this.authUser)
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

    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .catch(function (error) {
          let errorCode = error.code;
          let errorMsg = error.message;

          console.error('Error signing in: ', error)
          // TODO: let the user know
        })
    },

    logout() {
      console.log('logout', auth.currentUser)
      auth.signOut()
        .catch(function (error){})
    },

  }),
  getters: () => ({

  }),
})
