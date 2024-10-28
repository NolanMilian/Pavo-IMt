import {defineStore} from "pinia";
import { auth } from 'boot/firebase'
import AuthUser from 'src/models/AuthUser'
import firebase from "firebase";

export const useAuthStore = defineStore('user',{
  state: () => ({
    authUser: null,
  }),
  actions: () => ({
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
    }
  }),
  getters: () => ({

  }),
})
