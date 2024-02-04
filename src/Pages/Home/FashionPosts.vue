<template>
    <v-container>
        <div class="text-center">
            <h1>Latest Fasion</h1>
        </div>
        <div class="loader" v-if="isLoading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-else class="fashion-posts mt-10">
            <div class="card" v-for="post in thePosts.getCasualPosts" :key="post._id">
                <v-card width="360" min-height="410" rounded="lg" class="pb-3">
                    <router-link :to="'/details/' + post._id">
                        <div class="image-container">
                            <v-img class="zoomable-image" :src="post.imageUrl" cover height="300px"
                                style="border-radius: 0px;"></v-img>
                        </div>
                    </router-link>
                    <v-card-title>
                        {{ post.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ truncateDescription(post.descriptions[0].details, 100) }}
                    </v-card-subtitle>
                    <div class="d-flex justify-space-between px-4 mt-4 mb-1">
                        <div class=" d-flex justify-self-end align-center">
                            <i class="fa-regular fa-eye me-2"></i>
                            <span class="subheading me-2 text-family-secondary text-caption">256</span>
                        </div>
                        <div class="">
                            <span class="subheading text-family-secondary text-caption">01/01/2024</span>
                        </div>
                    </div>
                </v-card>
            </div>
        </div>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'
// Posts
import { allCasualPosts } from '@/store/casualPosts'
const thePosts = allCasualPosts()
const isLoading = ref(true)
onMounted(async () => {
    try {
        await thePosts.fetchAllCasualPosts()
    } finally {
        isLoading.value = false
    }
})
const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
        return description;
    } else {
        return description.slice(0, maxLength) + '...';
    }
};
</script>


<style scoped>
a {
    text-decoration: none;
    color: black;
}

.fashion-posts {
    /* border: 1px solid; */
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2.7rem;
}

.v-img {
    border-radius: 15px;
    height: 100%;
}

.v-card-text {
    padding-left: 0;
    padding-top: 0;
}

.image-container {
    overflow: hidden;
    /* border-radius: 15px; */
    height: 300px;
    /* Ensure that the inner image doesn't overflow the container */
}

.zoomable-image {
    transition: transform 0.5s;
    /* Add a smooth transition effect */
}

.zoomable-image:hover {
    transform: scale(1.1);
    /* Change the scale factor as needed for your desired zoom level */
}

/* .card {
    max-width: 284px;
    width: 100%;
    cursor: pointer;
} */
</style>