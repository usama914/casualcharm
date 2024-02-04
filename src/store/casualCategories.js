// categories.js
import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const useCategoriesStore = defineStore({
    id: 'casualCharmCategories',
    state: () => ({
        categories: [],
    }),
    getters: {
        getCategories: (state) => state.categories.categories
    },
    actions: {
        async fetchCategories() {
            try {
                const response = await axios.get(`${BASE_URL}/shared/get-categories`)
                // console.log('fetchCategories action ->', response.data)
                this.categories = response.data
            } catch (e) {
                console.error('Error fetching categories:', e)
            }
        },
    },
})
