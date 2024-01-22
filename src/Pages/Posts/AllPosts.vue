<template>
    <v-container>
        <div class="fashion-posts mt-10">
            <div class="card" v-for="post in thePosts.getPosts" :key="post._id">
                <div class="image-container mb-4">
                    <v-img class="zoomable-image" :src="post.imageUrl" cover></v-img>
                </div>
                <h4 class="text-h5 font-weight-bold">
                    <post class="title">{{ post.title }}</post>
                </h4>
                <v-card-text>
                    <p class="text-caption">
                        {{ truncateDescription(post.description, 50) }}
                    </p>
                </v-card-text>
            </div>
        </div>
    </v-container>
</template>
<script setup>
import { onMounted } from 'vue'
import { allCasualPosts } from '@/store/casualPosts'
const thePosts = allCasualPosts()

onMounted(async () => {
    await thePosts.fetchAllCasualPosts()
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
.fashion-posts {
    /* border: 1px solid; */
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
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

.card {
    max-width: 300px;
    width: 100%;
    cursor: pointer;
}
</style>