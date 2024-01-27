<template>
    <v-carousel class="mt-6" height="700" cycle hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <div class="carousel-imgs">
                <img src="../../assets/banner2.jpg" alt="">
            </div>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
}
</script>
<style scoped>
.carousel-imgs {
    height: 100%;
}

img {
    width: 100%;
    height: 100%;
}

/* .v-carousel-item {
    height: 70dvh;
} */
</style>