<!-- Tugas 7 -->
<!-- tambahkan name pada router untuk user, lalu kita akan ubah RouterLink pada user -->

<script setup>

</script>

<template>
<div>
  <h1>User</h1>
  <ul>
    <li>
      <RouterLink :to="{ name: 'user-profile' }">Profile</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'user-order' }">Order</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'user-wishlist' }">Wishlist</RouterLink>
    </li>
  </ul>
  <RouterView />
  <div>put footer here</div>
</div>
</template>

<style scoped>
.router-link-exact-active {
    color: darkcyan;
    font-weight: bold;
}

</style>