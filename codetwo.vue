<template>
    <div class="fashion-cards mt-10">
        <div class="cards d-flex flex-wrap justify-start">
            <v-sheet class="sheet-card text-body-2 mx-auto" rounded="md" max-width="450" v-for="post in posts.posts"
                :key="post.id">
                <v-container fluid>
                    <v-card>

                        <v-row>
                            <v-col cols="12" md="5">
                                <div class="image-container mb-4">
                                    <v-img class="zoomable-image" :src="post.imageUrl" cover></v-img>
                                </div>
                            </v-col>

                            <v-col cols="12" md="7">
                                <h4 class="text-h5 font-weight-bold mb-4">{{ post.title }}</h4>
                                <p class="mb-4">
                                    {{ post.description }}
                                </p>
                            </v-col>
                        </v-row>
                    </v-card>
                    <!-- <v-divider></v-divider> -->
                </v-container>
            </v-sheet>
        </div>
        <v-divider vertical></v-divider>
        <div class="ads">
            <v-sheet class="sheet-card text-body-2 mx-auto" max-width="450" v-for="sheet in 4" :key="sheet">
                <v-container fluid>
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-img src="https://i.pinimg.com/736x/bb/c5/a9/bbc5a946ed500f669d04e3ee3d837228.jpg" height="88"
                                cover></v-img>
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
</template>
<script setup>
import { useTestStore } from '@/store/fashionStore';

const posts = useTestStore()
</script>

<style scoped>
/* .sheet-card {
    border: 1px solid black;
} */

.fashion-cards {
    display: flex;
    justify-content: center;
    /* border: 2px solid orangered; */
    gap: 10px;
}

.fashion-cards .cards {
    width: 60%;
    gap: 5px
}

.ads {
    display: flex;
    flex-flow: column;
    gap: 5px;
}

.sheet-card:hover {
    cursor: pointer;
}

/* .sheet-card:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    transition: trasform 0.2s;
} */

.image-container {
    overflow: hidden;
    border-radius: 15px;
    height: 200px;
    min-width: 100px;
}

.v-img {
    border-radius: 15px;
    height: 100%;
    width: 100%;
}

.zoomable-image {
    transition: transform 0.5s;
}

.zoomable-image:hover {
    transform: scale(1.1);
    /* Change the scale factor as needed for your desired zoom level */
}
</style>