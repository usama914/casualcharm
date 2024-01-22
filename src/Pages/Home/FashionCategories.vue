<template>
    <v-container>

        <div class="categories mt-10">
            <div class="fashion-cards">
                <div class="card" v-for="category in categoriesData.categories" :key="category._id">
                    <div v-if="categoriesData.categories.length > 0">
                        <v-card max-width="280" class="py-2 px-2">
                            <v-img class="mb-3" height="250" :src="category.imageUrl" cover></v-img>
                            <h4 class="text-h6 font-weight-bold text-center">
                                <post class="title px-5 py-5">{{ category.title }}</post>
                            </h4>
                        </v-card>
                    </div>
                    <div v-else>
                        <v-skeleton-loader :elevation="1" type="card"></v-skeleton-loader>
                    </div>
                </div>
                <!-- {{ categoriesData }} -->
                <!-- {{ allCategories.categories }} -->
            </div>
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
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useCategoriesStore } from '@/store/casualCategories'

const categoriesStore = useCategoriesStore()
const categoriesData = ref([])

onMounted(async () => {
    await categoriesStore.fetchCategories()
    categoriesData.value = categoriesStore.categories
})
</script>
<style scoped>
/* .sheet-card {
    border: 1px solid black;
} */
.categories {
    display: flex;
    align-items: flex-start;
}

.fashion-cards {
    display: flex;
    justify-content: flex-start;
    /* border: 2px solid orangered; */
    gap: 10px;
    flex-wrap: wrap;
    width: 70%;
    /* border: 1px solid; */
}

.fashion-cards .cards {
    gap: 5px;
    width: 100%;
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