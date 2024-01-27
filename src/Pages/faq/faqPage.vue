<template>
    <AppBar />
    <faqContent />
    <anyQuestion />
    <FooterLayout />
</template>
<script setup>

import AppBar from '../../layouts/default/AppBar.vue';
import faqContent from './faqContent.vue';
import anyQuestion from './anyQuestion.vue';
import FooterLayout from '@/layouts/default/FooterLayout.vue';
</script>