import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const frequentlyAskedQuestions = defineStore({
    id: 'faqs',
    state: () => ({
        questions: [],
    }),
    getters: {
        getAllQuestions: (state) => state.questions.faqs
    },
    actions: {
        async fetchFaq() {
            try {
                const response = await axios.get(`${BASE_URL}/shared/get-faqs`)
                console.log('fetchFaq action ->', response.data)
                this.questions = response.data
            } catch (e) {
                console.error('Error fetching fetchAboutUs:', e)
            }
        },
    },
})
