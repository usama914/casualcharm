<template>
    <v-container>
        <div class="loader" v-if="isLoading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-else class="categories mt-10">
            <div class="fashion-cards">
                <div class="card" v-for="category in categoriesData.categories" :key="category._id">
                    <v-card max-width="280" class="py-2 px-2">
                        <v-img class="mb-3" height="250" :src="category.imageUrl" cover></v-img>
                        <h4 class="text-h6 font-weight-bold text-center">
                            <post class="title px-5 py-5">{{ category.title }}</post>
                        </h4>
                    </v-card>
                </div>
            </div>
            <v-divider vertical></v-divider>
            <div class="ads">
                <v-sheet class="sheet-card text-body-2 mx-auto" max-width="450" v-for="sheet in 2" :key="sheet">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="3" class="ads-img">
                                <v-img class="ad"
                                    src="https://i.pinimg.com/736x/bb/c5/a9/bbc5a946ed500f669d04e3ee3d837228.jpg"
                                    height="100" cover></v-img>
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
const isLoading = ref(true)

onMounted(async () => {
    try {
        console.log('Setting isLoading to true');
        await categoriesStore.fetchCategories();
        categoriesData.value = categoriesStore.categories;
    } finally {
        console.log('Setting isLoading to false');
        isLoading.value = false;
    }
})
</script>

<style scoped>
/* .sheet-card {
    border: 1px solid black;
} */
.categories {
    display: flex;
    align-items: flex-start;
    /* border: 1px solid; */
}

@media (max-width:1280px) {
    .categories {
        flex-flow: column;
        width: 100%;
    }

    .fashion-cards,
    .ads {
        width: 100% !important;
    }

    .fashion-cards {
        justify-content: center !important;
    }

}

@media (max-width:970px) {

    .ads-img {
        max-height: 300px !important;
    }

    .ad {
        height: 100% !important;
        /* border: 2px solid red; */
    }
}

.fashion-cards {
    display: flex;
    justify-content: flex-start;
    /* border: 2px solid orangered; */
    gap: 10px;
    flex-wrap: wrap;
    width: 70%;
}

.fashion-cards .cards {
    gap: 5px;
    width: 100%;
}

.ads {
    display: flex;
    flex-flow: column;
    gap: 5px;
    /* border: 1px solid rebeccapurple */
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
    max-width: 284px;
    width: 100%;
}
</style>