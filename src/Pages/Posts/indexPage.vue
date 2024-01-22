<template>
    <AppBar />
    <PostCategories />
    <AllPosts />
    <FooterLayout />
</template>
<script setup>

import AppBar from '../../layouts/default/AppBar.vue';
import PostCategories from './PostCategories.vue';
import AllPosts from './AllPosts.vue';

import FooterLayout from '@/layouts/default/FooterLayout.vue';
</script>