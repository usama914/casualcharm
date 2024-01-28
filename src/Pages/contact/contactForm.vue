<template>
    <v-container class="mt-10 contact-form">
        <v-sheet width="500" class="cont-form mx-auto">
            <h1 class="font-weight-bold mb-5 text-center">Contact Us</h1>
            <v-form @submit.prevent="submitForm">
                <!-- <v-text-field required v-model="firstName" :rules="rules" label="Name"></v-text-field> -->
                <v-text-field required v-model="firstName" label="Name" variant="outlined"></v-text-field>
                <v-text-field v-model="email" label="Email" variant="outlined" @input="validateEmail"></v-text-field>
                <v-text-field v-model="message" label="Message" variant="outlined"></v-text-field>
                <v-btn type="submit" block color="#9EC8B9" class="mt-2 text-white" height="50">Submit</v-btn>
                <p v-if="errorMessage" class="error-message text-center mt-3 text-subtitle-2">{{ errorMessage }}</p>
            </v-form>
        </v-sheet>

        <v-sheet class="policies pa-6 text-white mx-auto" color="#9EC8B9" max-width="400">
            <h4 class="text-h5 font-weight-bold mb-4">Your Privacy</h4>

            <p class="mb-8">
                This business determines the use of personal data collectied on our media properties and across the
                internet. We may collect data that you submit to us directly or data that we collect automatically
                including from cookies (such as device information or IP address).

                <br>
                <br>

                Please read our <a href="#" class="">Privacy Policy</a> to learn about our privacy
                practices or click "Your Preferences" to exercise control over your data.
            </p>

            <v-btn block class="text-none text-black mb-4" size="x-large" variant="flat">
                Accept
            </v-btn>

            <v-btn block class="text-none text-black" size="x-large" variant="outlined">
                Your Preferences
            </v-btn>
        </v-sheet>
    </v-container>
    <v-snackbar v-model="snackbar" vertical :timeout="3000" color="#9EC8B9" location="top">
        <div class="text-subtitle-1 pb-2 text-white">We have got you!</div>

        <p class="text-white"> {{ successMessage }}</p>

        <template v-slot:actions>
            <v-btn color="white" variant="text" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
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
const successMessage = ref('')
const snackbar = ref(false)
// Methods
// form validation
const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value && !emailRegex.test(email.value)) {
        errorMessage.value = 'Please enter a valid email address';
    } else {
        errorMessage.value = '';
    }
};

const submitForm = async () => {
    if (!firstName.value || !email.value || !message.value) {
        errorMessage.value = 'Please complete the form first!';
        return;
    }

    // Additional email validation
    validateEmail();

    if (errorMessage.value) {
        return; // Stop form submission if there is an error
    }

    try {
        // Perform API request here, using axios
        const response = await axios.post(`${BASE_URL}/shared/add-contact`, {
            title: firstName.value,
            email: email.value,
            message: message.value,
        });

        if (response.status === 200) {
            const responseData = response.data;
            snackbar.value = true;
            successMessage.value = response.data.message;
            console.log('API response:', responseData);
        } else {
            console.error('API request failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    } finally {
        firstName.value = '';
        email.value = '';
        message.value = '';
        errorMessage.value = '';
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

@media(max-width:1280px) {
    .contact-form {
        flex-flow: column;
        gap: 2rem;
    }

    .policies {
        max-width: 800px !important;
    }
}

@media(max-width:660px) {

    .cont-form {
        width: 100% !important;
    }

}
</style>