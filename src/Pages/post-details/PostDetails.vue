<template>
    <v-container>
        <div class="categories mt-10">
            <v-container class="fashion-cards">
                <div class="post-info">
                    <h4 class="text-h5 font-weight-bold mb-4">{{ postDetails?.post.title }}</h4>
                    <v-breadcrumbs class="mb-2" :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
                    <p>{{ postDetails?.post.createdAt }}</p>
                    <div class="post-image mt-3">
                        <img :src="postDetails?.post.imageUrl">
                    </div>
                    <div class="post-description mt-2">
                        <p>{{ postDetails?.post.description }}</p>
                    </div>
                </div>
            </v-container>
            <v-divider vertical></v-divider>
            <div class="ads">
                <v-sheet class="sheet-card text-body-2 mx-auto" max-width="450" v-for="sheet in 4" :key="sheet">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="3">
                                <v-img src="https://i.pinimg.com/736x/bb/c5/a9/bbc5a946ed500f669d04e3ee3d837228.jpg"
                                    height="88" cover></v-img>
                            </v-col>

                            <v-col cols="12" md="9">
                                <h4 class="text-h5 font-weight-bold mb-4">Your Privacy</h4>
                                <p class="mb-4">
                                    This is part of our <a href="#">Most Comprehenseive Guide to Referral Programs</a> > <a
                                        href="#">Do
                                        I Need A Referral Program?</a> section. You may enjoy other related articles:
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </div>
        </div>
    </v-container>
    <!-- {{ postDetails }} -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { BASE_URL } from '@/baseUrl';
import axios from 'axios';

// const route = useRoute();
const postId = ref(null);
const postDetails = ref(null);
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
    const route = useRoute();
    postId.value = route.params.id;
    console.log('Post ID:', postId.value);
    // Fetch post details using Axios
    try {
        const response = await axios.get(`${BASE_URL}/shared/get-post-details/${postId.value}`);
        console.log("prodcut details :", response.data)
        postDetails.value = response.data; // Assuming the response contains the post details
        loading.value = false;
    } catch (e) {
        console.error('Error fetching post details:', e);
        loading.value = false;
        error.value = true;
    }
});
</script>

<style scoped>
/* .sheet-card {
    border: 1px solid black;
} */
.categories {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    padding-top: 2rem;
}

.fashion-cards {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    width: 100%;
    /* border: 1px solid; */
}

.post-info {
    width: 100%;
}

.post-image {
    max-width: 720px;
    height: 500px;
    /* border: 1px solid; */
}

.ads {
    display: flex;
    flex-flow: column;
    gap: 5px;
    width: 35rem;
}

.v-img,
img {
    border-radius: 15px;
    height: 100%;
    width: 100%;
}

.v-breadcrumbs {
    padding: 0;
}
</style>