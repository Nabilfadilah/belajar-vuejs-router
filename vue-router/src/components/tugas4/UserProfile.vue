<!-- Tugas 4 -->

<script setup>

// Komponen ini akan menerima prop requestId dari query parameter (Tugas 15)
const {requestId} = defineProps(['requestId']); 
console.info('requestId:', requestId);


</script>

<template>
  <h1>User Profile</h1>
</template>

<style scoped>

</style>