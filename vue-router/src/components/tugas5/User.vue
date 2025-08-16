<!-- Tugas 5 -->
<!-- Tambahkan link di layout User untuk berpindah ke halaman user profile, user order dan user wishlist -->

<script setup>

</script>

<template>
  <div>
    <h1>User</h1>
    <!-- RouterLink -->
    <ul>
       <!-- routerLink tidak melakukan realod ketika pindah halaman --> 
      <li><RouterLink to="/users/profile">Profile</RouterLink></li>
      <li><RouterLink to="/users/order">Order</RouterLink></li>
      <li><RouterLink to="/users/wishlist">Wishlist</RouterLink></li>
    </ul>

    <!-- Navigation, masih realod ketika pindah halaman -->
    <!-- <ul>
        <li><a href="/users/profile">Profile</a></li>
        <li><a href="/users/order">Order</a></li>
        <li><a href="/users/wishlist">Wishlist</a></li>
    </ul> -->
    <RouterVIew />
    <div>put footer</div>
  </div>
</template>

<style scoped>
/* Active Link */
.router-link-exact-active {
    color: red;
    font-weight: bold;
}


</style>