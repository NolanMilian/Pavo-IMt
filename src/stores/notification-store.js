import { defineStore } from 'pinia'

/*
Notification Store: Handles notifications and alerts for important events or updates within the app, such as new messages, campaign invitations, or character updates.
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
