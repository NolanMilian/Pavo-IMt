import { defineStore } from 'pinia';
import { db } from "boot/firebase";

/*
Content Store: Manages the source material and content data, including classes, spells, races, and other game-related information.
 */

export const useContentStore = defineStore('content', {
  state: () => ({
    content: [],
    races: [],
    classes: []
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    getContentByGame (game) {
      db
      .collectionGroup(`content`)
      .where("game","==",game)
      .get()
      .then((querySnapshot) => {
        this.getAllContent.length = 0;
        querySnapshot.forEach((doc) => {
          this.content.push(new SourceContent(doc.id, doc.data()));
        })
      })
      .catch((error) => {console.error('Error getting documents',error);})
    },
    
  }
})
