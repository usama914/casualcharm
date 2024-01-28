<template>
    <div class="news-letter mt-10">
        <div class="details">
            <h1 class="font-weight-bold">Join 500,000+ Subscribers</h1>
            <p>Get exclusive access to freebies and news. We don’t spam, rent or sell your email. </p>
        </div>
        <v-col cols="12" sm="6">
            <div class="d-flex ">
                <div class="" style="width: 100%;">
                    <v-text-field label="Enter your email address here" type="email" persistent-hint variant="outlined"
                        v-model="email"></v-text-field>
                    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                </div>
                <v-btn class="ml-3" variant="outlined" width="120" height="55" @click="subscribe">
                    Subscribe
                </v-btn>
            </div>
        </v-col>

    </div>
    <v-snackbar v-model="snackbar" vertical :timeout="3000" color="#9EC8B9" location="top">
        <div class="text-subtitle-1 pb-2 text-white">Welcome to CasualCharm !</div>

        <p class="text-white"> {{ successMessage }}</p>

        <template v-slot:actions>
            <v-btn color="white" variant="text" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios';
import { BASE_URL } from '@/baseUrl';

const email = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const snackbar = ref(false)
const subscribe = async () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value) {
        errorMessage.value = 'Please enter email first';
    } else if (!emailRegex.test(email.value)) {
        errorMessage.value = 'Please enter a valid email address';
    } else {
        try {
            const response = await axios.post(`${BASE_URL}/subscriber/add-subscriber`, {
                email: email.value,
            });
            errorMessage.value = '';
            successMessage.value = response.data.message;
            snackbar.value = true;
            const subscribedSuccessfully = response.data;
            console.log('Successful', subscribedSuccessfully);
        } catch (e) {
            console.error(e);
        } finally {
            email.value = '';
        }
    }
};
</script>

<style scoped>
.news-letter {
    background-color: var(--primary-color-300);
    color: white;
    min-height: 45dvh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: end;
    gap: 2rem;
    padding: 10px;
}

.details h1 {
    font-size: clamp(2rem, 7vw, 3rem) !important;
}

.error-message {
    font-size: small;
}

@media(max-width:760px) {

    .v-col-12 {
        flex: 0 0 30% !important;
        max-width: 100%;
    }
}
</style>