<template>
    <AppBar />
    <HeroPortion />
    <!-- <AdsPortion /> -->
    <FashionCategories />
    <PopularPosts />
    <FashionPosts />
    <NewsLetter />
    <FooterLayout />
</template>
<script setup>

import AppBar from '../../layouts/default/AppBar.vue';
import HeroPortion from './HeroPortion.vue';
// import AdsPortion from './AdsPortion.vue';
import FashionCategories from './FashionCategories.vue';
import PopularPosts from './PopularPosts.vue';
import FashionPosts from './FashionPosts.vue';
import NewsLetter from './NewsLetter.vue';
import FooterLayout from '@/layouts/default/FooterLayout.vue';
</script>