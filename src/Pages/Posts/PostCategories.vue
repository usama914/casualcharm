<template>
    <v-container>
        <div class="loader" v-if="isLoading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-else class="fashion-posts my-16">
            <div class="card" v-for="post in posts.getCategories" :key="post._id" @click="selectedCategory(post._id)">
                <div class="image-container">
                    <v-img class="align-end zoomable-image" :src="post.imageUrl"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                        <v-card-title class="text-white">{{ post.title }}</v-card-title>
                    </v-img>
                </div>
            </div>
        </div>
    </v-container>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useCategoriesStore } from '@/store/casualCategories';
const isLoading = ref(true)

const posts = useCategoriesStore();
onMounted(async () => {
    try {
        await posts.fetchCategories()
    } finally {
        isLoading.value = false
    }
})

// below code is for getting the selected category data by sending the id to the pinia store.
import { postCategories } from '@/store/postsByCategories'
const selectedPost = postCategories()
const selectedCategory = (cardId) => {
    console.log("selected Card Id", cardId)
    selectedPost.fetchSelectedCategories(cardId)
}
</script>
  
<style scoped>
.fashion-posts {
    display: flex;
    flex-wrap: wrap;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    gap: 15px;
    justify-content: flex-start;
    padding: 1rem
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
    height: 200px;
}

.zoomable-image {
    transition: transform 0.5s;
}

.zoomable-image:hover {
    transform: scale(1.03);
}

.card {
    width: 100%;
    max-height: 150px;
    max-width: 300px;
    cursor: pointer;
}
</style>
  