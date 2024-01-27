// Utilities
import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const allCasualPosts = defineStore({
  id: "casualposts",
  state: () => ({
    casualPosts: null
  }),
  getters: {
    getCasualPosts: (state) => state.casualPosts?.posts
  },
  actions: {
    async fetchAllCasualPosts() {
      try {
        const response = await axios.get(`${BASE_URL}/shared/get-posts`)
        console.log("fetchAllCasualPosts :", response.data)
        this.casualPosts = response.data
      } catch (e) {
        console.error(e)
      }
    }
  }
})
