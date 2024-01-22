<template>
    <v-footer class="footer-charm">
        <v-row justify="center" no-gutters>
            <router-link to="/">Home</router-link>
            <router-link to="/">About Us</router-link>
            <router-link to="/allposts">Posts</router-link>
            <router-link to="/">Faq's</router-link>
            <router-link to="/">Contact Us</router-link>
            <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
                {{ link }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Casual Charm</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>
<script setup>
</script>
<style scoped>
.footer-charm {
    background-color: var(--primary-color-400);
    color: white;
}

a {
    color: white;
    text-decoration: none;
    margin-inline: 20px;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem 0 0 0.6rem;
}
</style>