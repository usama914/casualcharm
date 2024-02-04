// Utilities
import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const postCategories = defineStore({
    id: "singleCategories",
    state: () => ({
        categories: null
    }),
    getters: {
        getCategoryPosts: (state) => state.categories?.posts
    },
    actions: {
        async fetchSelectedCategories(id) {
            try {
                const response = await axios.get(`${BASE_URL}/shared/get-posts-by-category/${id}`)
                console.log("fetchAllCategories :", response.data)
                this.categories = response.data
            } catch (e) {
                console.error(e)
            }
        }
    }
})
