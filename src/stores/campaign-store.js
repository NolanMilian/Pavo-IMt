import { defineStore } from 'pinia'
/*
 Campaign Store: Deals with managing campaigns, including creating, joining, and tracking campaign details.
 */

export const useCampaignStore = defineStore('campaign', {
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
