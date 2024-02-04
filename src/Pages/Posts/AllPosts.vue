<template>
    <v-container>
        <div class="loader" v-if="isLoadingCasualPosts">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <!-- Loader for posts by category -->
        <div class="loader" v-if="isLoadingPostsByCategory">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-else class="fashion-posts mt-10">
            <div class="card" v-for="post in displayedPosts" :key="post._id">
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
                            <span class="subheading me-2 text-family-secondary">256</span>
                        </div>
                        <div class="">
                            <span class="subheading text-family-secondary">01/01/2024</span>
                        </div>
                    </div>
                </v-card>
            </div>
        </div>
    </v-container>
    <!-- Data succesful -->
    <!-- {{ postsByCategory.getCategoryPosts }} -->
    <!-- Data succesful -->
    <!-- {{ thePosts.getCasualPosts }} -->
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { allCasualPosts } from '@/store/casualPosts';
import { postCategories } from '@/store/postsByCategories';

const thePosts = allCasualPosts();
const postsByCategory = postCategories();
const isLoadingCasualPosts = ref(true);
const isLoadingPostsByCategory = ref(true);

// Fetch casual posts on mount
onMounted(async () => {
    try {
        await thePosts.fetchAllCasualPosts();
    } finally {
        isLoadingCasualPosts.value = false;
    }
});

// Fetch posts by category on mount
onMounted(async () => {
    try {
        await postsByCategory.fetchSelectedCategories();
    }
    finally {
        isLoadingPostsByCategory.value = false
    }
});

// Computed property to determine which posts to display
const displayedPosts = computed(() => {
    // Use postsByCategories if available, otherwise fallback to casualPosts
    return postsByCategory.getCategoryPosts?.length > 0
        ? postsByCategory.getCategoryPosts
        : thePosts.getCasualPosts;
});

const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
        return description;
    } else {
        return description.slice(0, maxLength) + '...';
    }
};
</script>

<style scoped>
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
    border-radius: 15px;
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

.loader {
    height: 25dvh !important;
}
</style>