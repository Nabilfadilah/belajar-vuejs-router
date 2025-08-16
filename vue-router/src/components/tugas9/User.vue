<!-- Tugas 9 -->
<!-- Misal kita akan ubah komponen User dengan menambahkan RouterView untuk header, footer dan default -->

<script setup>

</script>

<template>
  <div>
    <h1>User</h1>
    <RouterView name="header" />
    <!-- Komponen ini akan menerima prop requestId dari query parameter (Tugas 15) -->
    <RouterView v-slot="{Component}">
      <!-- Komponen yang di render akan menerima prop requestId (Tugas 15) -->
      <component :is="Component" :request-id="$route.query.requestId" />
    </RouterView>
    <RouterView name="footer" />
  </div>
</template>

<style scoped>

</style>