<template>
    <v-container class="mt-10 contact-form">
        <v-sheet width="500" class="mx-auto">
            <h1 class="font-weight-bold mb-5 text-center">Contact Us</h1>
            <v-form @submit.prevent="submitForm">
                <!-- <v-text-field required v-model="firstName" :rules="rules" label="Name"></v-text-field> -->
                <v-text-field required v-model="firstName" label="Name"></v-text-field>
                <v-text-field v-model="email" label="Email"></v-text-field>
                <v-text-field v-model="message" label="Message"></v-text-field>
                <v-btn type="submit" block class="mt-2">Submit</v-btn>
                <p v-if="errorMessage" class="error-message text-center mt-3">{{ errorMessage }}</p>
            </v-form>
        </v-sheet>
    </v-container>
</template>
  
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { BASE_URL } from '@/baseUrl';

// Reactive data
const firstName = ref('');
const email = ref('');
const message = ref('');

const errorMessage = ref('');

// Form validation rules (example)
// const rules = [
//     (v) => !!v || 'Field is required',
// ];

// Methods
const submitForm = async () => {
    if (!firstName.value || !email.value || !message.value) {
        errorMessage.value = 'Please complete the form first!';
        return
    }
    try {
        // Perform API request here, using axios
        const response = await axios.post(`${BASE_URL}/shared/add-contact`, {
            title: firstName.value,
            email: email.value,
            message: message.value,
        });
        errorMessage.value = '';

        if (response.status === 200) {
            const responseData = response.data;
            console.log('API response:', responseData);
        } else {
            console.error('API request failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    } finally {
        firstName.value = '',
            email.value = '',
            message.value = '',
            errorMessage.value = ''
    }
};
</script>
  
<style>
.contact-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.error-message {
    color: red;
}
</style>