<template>
    <div class="news-letter mt-10">
        <div class="details">
            <h1 class="text-h2 font-weight-bold">Join 500,000+ Subscribers</h1>
            <p>Get exclusive access to freebies and news. We don’t spam, rent or sell your email. </p>
        </div>
        <v-col cols="12" sm="6">
            <div class="d-flex ">

                <v-text-field label="Enter your email address here" persistent-hint variant="outlined"></v-text-field>
                <v-btn class="ml-3" variant="outlined" width="120" height="55">
                    Subscribe
                </v-btn>
            </div>
        </v-col>
    </div>
</template>

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
</style>