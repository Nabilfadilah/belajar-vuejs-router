<!-- Tugas 1
buat dua komponen, yaitu Home dan About
Path / akan kita gunakan untuk menampilkan komponen Home
Path /about akan kita gunakan untuk menampilkan komponen About -->

<script setup>
  const {title} = defineProps({
    title: String
  })
  
</script>

<template>
  <div>
    <!-- Tugas 11: Props namanya title -->
    <h1>{{ title }}</h1>

    <!-- <h1>Home Component</h1> -->
    <p>This is the home page of the application.</p>
  </div>
</template>

<style scoped>  
  h1 {
    color: blue;
  }
  p {
    font-size: 16px;
  }

</style>