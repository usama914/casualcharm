<template>
    <v-container>
        <div class="loader" v-if="isLoading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-else class="categories mt-10">
            <v-container class="fashion-cards">
                <div class="post-info">
                    <h4 class="text-h5 font-weight-bold mb-4">{{ postDetails?.post.title }}</h4>
                    <div class="post-image mt-3">
                        <img :src="postDetails?.post.imageUrl">
                    </div>
                    <div class="d-flex justify-space-between mt-4 mb-1">
                        <div class=" d-flex justify-self-end align-center">
                            <i class="fa-regular fa-eye me-2"></i>
                            <span class="subheading me-2 text-family-secondary text-caption">256</span>
                        </div>
                        <div class="">
                            <span class="subheading text-family-secondary text-caption">{{
                                formatCreatedAt(postDetails?.post.createdAt)
                            }}</span>
                        </div>
                    </div>
                    <div class="post-description mt-10">
                        <div class="" v-for="det in  postDetails?.post.descriptions" :key="det._id">
                            <h4 class="text-h6 mb-2">{{ det.title }}</h4>
                            <p class="mb-4 text-body-2 font-weight-light">{{ det.details }}</p>
                        </div>
                    </div>
                </div>
            </v-container>
            <v-divider vertical></v-divider>
            <div class="ads">
                <v-sheet class="sheet-card text-body-2 mx-auto" max-width="450" v-for="sheet in 4" :key="sheet">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="3">
                                <v-img class="ads-img"
                                    src="https://i.pinimg.com/736x/bb/c5/a9/bbc5a946ed500f669d04e3ee3d837228.jpg"
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
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { BASE_URL } from '@/baseUrl';
import moment from 'moment';
import axios from 'axios';

// const route = useRoute();
const postId = ref(null);
const postDetails = ref(null);
const postDescription = ref(null);
const isLoading = ref(true);
const error = ref(false);

const formatCreatedAt = (createdAt) => {
    return moment(createdAt).format('MMMM DD, YYYY [at] h:mm A');
};

onMounted(async () => {
    const route = useRoute();
    postId.value = route.params.id;
    console.log('Post ID:', postId.value);
    // Fetch post details using Axios
    try {
        const response = await axios.get(`${BASE_URL}/shared/get-post-details/${postId.value}`);
        console.log("prodcut details :", response.data)
        postDetails.value = response.data; // Assuming the response contains the post details
        postDescription.value = response.data.post; // Assuming the response contains the post details
    } catch (e) {
        console.error('Error fetching post details:', e);
        error.value = true;
    } finally {
        isLoading.value = false
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

@media (max-width:1080px) {
    .categories {
        flex-flow: column;
        align-items: center;
    }

    .post-image {
        max-width: 100% !important;
    }

    .v-col-12 {
        flex: 0 0 100% !important;
        max-width: 100% !important;
    }

    .v-img {
        height: 300px !important;
    }
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
    border-radius: 10px;
    height: 100%;
    width: 100%;
}

.v-breadcrumbs {
    padding: 0;
}

.loader {
    height: 80dvh !important;
}
</style>