<template>
    <v-footer class="footer-charm">
        <v-row justify="center" no-gutters>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/allposts">Posts</router-link>
            <router-link to="/faqs">Faq's</router-link>
            <router-link to="/contact">Contact Us</router-link>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Casual Charm</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>
<style scoped>
.footer-charm {
    background-color: var(--primary-color-400);
    color: white;
    max-height: 130px;
    margin-top: auto;
    /* This pushes the footer to the bottom */
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