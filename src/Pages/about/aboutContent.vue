<template>
    <v-container class="mt-15">
        <div>
            <h1 class="font-weight-bold">About Us</h1>
            <div class="loader" v-if="isLoading">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
            <div class="mt-5" v-else>
                <div v-for="aboutItem in aboutUsDetails" :key="aboutItem._id">
                    <div class="mb-5">
                        <h3>{{ aboutItem.title }}</h3>
                        <p>{{ aboutItem.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';
import { aboutUs } from '@/store/aboutus';
const aboutContent = aboutUs()
const aboutUsDetails = ref([])
const isLoading = ref(true)
onMounted(async () => {
    try {
        await aboutContent.fetchAboutUs()
        aboutUsDetails.value = aboutContent.getaboutUs
    } finally {
        isLoading.value = false
    }
}
)
</script>

<style>
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65dvh;
}
</style>