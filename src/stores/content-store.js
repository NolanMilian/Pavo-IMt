import { defineStore } from 'pinia';
import { db } from "boot/firebase";

/*
Content Store: Manages the source material and content data, including classes, spells, races, and other game-related information.
 */

export const useContentStore = defineStore('content', {
  state: () => ({
    content: {},
    races: {},
    classes: {}
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    increment () {
      this.counter++
    },
    getAllContent () {
      db
      .collection('content')
      .onSnapshot((querySnapshot) => {} )
    },
    getContentByGame (game) {
      db
      .collection(`content/${game}/sourceMaterial/`)
      .onSnapshot((querySnapshot) => {} )
    }
  }
})
