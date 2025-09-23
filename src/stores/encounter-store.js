import { defineStore } from 'pinia'

/*
Encounter Store: Handles the state and actions related to managing and tracking encounters, such as initiative order, hit points, and combat-related mechanics.
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
