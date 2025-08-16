<!-- Tugas 4 -->
<!-- Misal kita akan membuat halaman User Profile, User Order dan User Wishlish
Kita akan buat dalam route /users/profile, /users/orders, dan /users/wishlist
Kita akan buat route /users, dan kita akan buat children route untuk /profile, /orders dan /wishlist -->


<script setup>

</script>

<template>
  <!-- <div>
    <h1>User</h1>
    <ul>
        <li><a href="/users/profile">Profile</a></li>
        <li><a href="/users/order">Order</a></li>
        <li><a href="/users/wishlist">Wishlist</a></li>
    </ul>
    <RouterVIew />
    <div>put footer here</div>
  </div> -->
  
  <div>
    <h1>User</h1>
    <div>put header here</div>
    <!-- nanti isi componenya rubah sesuai page -->
    <RouterView />
    <div>put footer here</div>
  </div>
</template>

<style scoped>

</style>