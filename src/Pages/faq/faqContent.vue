<template>
    <v-container class="mt-15">
        <div>
            <h1 class="font-weight-bold mb-5">Frequently Asked Questions</h1>
            <div class="loader" v-if="isLoading">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
            <div class="" v-else>
                <v-expansion-panels>
                    <v-expansion-panel v-for="question in allQuestions" :key="question._id">
                        <v-expansion-panel-title>Q. {{ question.question }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            {{ question.answer }}
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';
import { frequentlyAskedQuestions } from '@/store/faq';
const frequentQuestions = frequentlyAskedQuestions()
const allQuestions = ref([])
const isLoading = ref(true)

onMounted(async () => {
    try {
        await frequentQuestions.fetchFaq()
        allQuestions.value = frequentQuestions.getAllQuestions
    } finally {
        isLoading.value = false
    }
})
</script>
<style>
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20dvh;
}
</style>