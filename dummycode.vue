<template>
    <div class="fashion-posts mt-10">
        <div class="card" v-for="post in posts.posts" :key="post.id">
            <v-card max-width="280" class="py-2 px-2">
                <v-img class="mb-3" height="250" :src="post.imageUrl" cover></v-img>
                <h4 class="text-h6 font-weight-bold text-center">
                    <post class="title px-5 py-5">{{ post.title }}</post>
                </h4>
            </v-card>
        </div>
    </div>
</template>
<script setup>
import { useTestStore } from '@/store/fashionStore';

const posts = useTestStore()

</script>

<style scoped>
.fashion-posts {
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    row-gap: 2rem
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
    height: 280px;
    padding: 20px;
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

.v-card {
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.v-card:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
}

.card {
    max-width: 300px;
    width: 100%;
}
</style>