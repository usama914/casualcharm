<!-- TestComponent.vue -->

<template>
    <div>
        <h2>Test Data Component</h2>
        <ul>
            <li v-for="post in $store.posts" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.content }}</p>
            </li>
        </ul>
        {{ products.name }}
    </div>
</template>
  
<script setup>
import { useTestStore } from '@/store/fashionStore';
const products = useTestStore();
</script>
  
<style scoped>
/* Add your component-specific styles here */
</style>
  