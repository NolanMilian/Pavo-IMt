import { defineStore } from 'pinia'

/*
Content Store: Manages the source material and content data, including classes, spells, races, and other game-related information.
 */

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    increment () {
      this.counter++
    }
  }
})
