// categories.js
import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const aboutUs = defineStore({
    id: 'about',
    state: () => ({
        aboutUsDetails: [],
    }),
    getters: {
        getaboutUs: (state) => state.aboutUsDetails.aboutUs
    },
    actions: {
        async fetchAboutUs() {
            try {
                const response = await axios.get(`${BASE_URL}/shared/get-about-us`)
                console.log('fetchAboutUs action ->', response.data)
                this.aboutUsDetails = response.data
            } catch (e) {
                console.error('Error fetching fetchAboutUs:', e)
            }
        },
    },
})
