import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const collectCasualPostDetail = defineStore({
    id: "casualPostDetails",
    state: () => ({
        selectedPostDetails: []
    }),
    actions: {
        async fetchCasualPostDetail(postId) {
            try {
                const response = await axios.get(`${BASE_URL}/shared/get-post-details/${postId}`)
                console.log("fetchCasualPostDetail :", response.data),
                    this.selectedPostDetails = response.data
            }
            catch (e) {
                console.error(e)
            }
        }
    },
    persist: {
        enabled: true
    }
})