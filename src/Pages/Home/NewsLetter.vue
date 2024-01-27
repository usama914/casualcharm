<template>
    <div class="news-letter mt-10">
        <div class="details">
            <h1 class="text-h2 font-weight-bold">Join 500,000+ Subscribers</h1>
            <p>Get exclusive access to freebies and news. We don’t spam, rent or sell your email. </p>
        </div>
        <v-col cols="12" sm="6">
            <div class="d-flex ">
                <div class="" style="width: 100%;">
                    <v-text-field label="Enter your email address here" persistent-hint variant="outlined"
                        v-model="email"></v-text-field>
                    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                </div>
                <v-btn class="ml-3" variant="outlined" width="120" height="55" @click="subscribe">
                    Subscribe
                </v-btn>
            </div>
        </v-col>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios';
import { BASE_URL } from '@/baseUrl';

const email = ref('')
const errorMessage = ref('')
const subscribe = async () => {
    if (!email.value) {
        errorMessage.value = "Please enter email first"
    }
    try {
        const response = await axios.post(`${BASE_URL}/subscriber/add-subscriber`, {
            email: email.value
        })
        errorMessage.value = '';
        const subscribedSuccessfuly = response.data;
        console.log("succesful", subscribedSuccessfuly)
    }
    catch (e) {
        console.error(e)
    } finally {
        email.value = ''
    }
}
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
}

.error-message {
    font-size: small;
}
</style>