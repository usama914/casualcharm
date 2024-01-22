<template>
    <v-container>
        <div class="fashion-posts my-16">
            <div class="card" v-for="post in posts.getCategories" :key="post.id">
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
import { onMounted } from 'vue';
import { useCategoriesStore } from '@/store/casualCategories';

const posts = useCategoriesStore();
onMounted(async () => {
    await posts.fetchCategories()
})

// onMounted(async () => {
//     await categoriesStore.fetchCategories()
//     categoriesData.value = categoriesStore.categories
// })
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
    height: 100%;
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
  