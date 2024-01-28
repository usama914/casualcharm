<template>
    <div class="popular-posts mt-5">
        <v-container>
            <div class="text-center mb-5">
                <h4 class=" text-h5 font-weight-bold mb-4">Popular Posts</h4>
            </div>
            <div class="post-cards d-flex mt-10">
                <div class="post-inside text-center" max-width="400" v-for="(post, index) in posts.posts.slice(0, 4)"
                    :key="post.id">
                    <div class="image-container mb-4">
                        <v-img class="zoomable-image" height="220" width="220" :src="post.imageUrl" cover></v-img>
                    </div>
                    <v-card-subtitle class="pt-4">
                        {{ post.title }}
                    </v-card-subtitle>
                    <v-card-text>
                        <div>
                            {{ post.description }}
                        </div>
                    </v-card-text>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script setup>
import { useTestStore } from '@/store/fashionStore';
const posts = useTestStore()

</script>

<style scoped>
.popular-posts {
    min-height: 70dvh;

    background-color: var(--primary-color-300);
    color: white;
    padding-top: 2rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    /* border: 2px solid white; */
}

.v-card {
    background-color: beige;
}

.post-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.v-img {
    border-radius: 50%;
}

.post-inside {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: calc(100%/5);
    cursor: pointer;
}

.image-container {
    overflow: hidden;
    border-radius: 50%;
    /* Ensure that the inner image doesn't overflow the container */
}

.zoomable-image {
    transition: transform 0.5s;
}

.zoomable-image:hover {
    transform: scale(1.1);
    /* Change the scale factor as needed for your desired zoom level */
}

@media (max-width:970px) {

    .popular-posts {
        padding-inline: 2rem;
    }

    .post-cards {
        flex-flow: column;
        align-items: center;
        width: 100%;
    }

    .post-inside {
        width: 100%;
    }
}

@media (max-width:) {}

@media (max-width:) {}
</style>