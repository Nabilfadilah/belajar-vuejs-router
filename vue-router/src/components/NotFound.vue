<script setup>

import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<template>
<div>
    <h2>Not Found: {{ route.path }}</h2>
    <p>Sorry, the page you are looking for does not exist</p>
</div>
</template>

<style scoped>

</style>