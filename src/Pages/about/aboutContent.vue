<template>
    <v-container class="mt-15">
        <div>
            <h1 class="font-weight-bold mb-5">About Us</h1>
            <div v-for="aboutItem in aboutUsDetails" :key="aboutItem._id">
                <div class="mb-5">
                    <h3>{{ aboutItem.title }}</h3>
                    <p>{{ aboutItem.description }}</p>
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
onMounted(async () => {
    await aboutContent.fetchAboutUs()
    aboutUsDetails.value = aboutContent.getaboutUs
}
)
</script>