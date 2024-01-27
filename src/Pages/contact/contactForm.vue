<template>
    <v-container class="mt-10 contact-form">
        <v-sheet width="500" class="mx-auto">
            <h1 class="font-weight-bold mb-5 text-center">Contact Us</h1>
            <v-form @submit.prevent>
                <v-text-field v-model="firstName" :rules="rules" label="Name"></v-text-field>
                <v-text-field v-model="email" :rules="rules" label="Email"></v-text-field>
                <v-text-field label="Message" :rules="rules"></v-text-field>
                <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        firstName: '',
        email: "",
        rules: [
            value => {
                if (value) return true
                return 'Must not be empty.'
            },
        ],
    }),
}
</script>
<style>
.contact-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.v-sheet {
    border: 1px solid;
}
</style>