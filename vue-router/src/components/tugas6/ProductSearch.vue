<!-- Tugas 6: Membuat komponen ProductSearch.vue -->
<!-- Kita akan tambah halaman /products/search yang bisa kita gunakan untuk mencari data product -->

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const products = ref([]);       
const route = useRoute();

const search = ref(route.query.product || '');
const router = useRouter();

watchEffect(() => {
  // router.push({query: { product: search.value }})
  
  // jika tidak ingin history URL berubah, gunakan replace
  router.replace({query: { product: search.value }})

  // fetch produk dari API
  fetch('/api/products.json')
   .then(response => response.json())
   .then(products => products.filter(product => product.name.toLowerCase().includes(search.value)))
   .then(data => products.value = data)
})

</script>

<template>
  <div>
    <h1>Product Search</h1>
    <p>Search for products here.</p>
    <form>
      <input type="text" name="product" v-model="search" placeholder="Search Product">
    </form>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>  
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.description }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<style scoped>
h1 {
    color: #333;
    font-size: 24px;    
}

p {
    color: #666;
    font-size: 16px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead th {
    background-color: #f2f2f2;
    padding: 8px;
    text-align: left;
}

thead th, tbody td {
    border: 1px solid #ddd;
    padding: 8px;
}       

tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}       

tbody tr:hover {
    background-color: #f1f1f1;
}

tbody td {
    vertical-align: top;
}

</style>