<!-- Tugas 3: Membuat komponen ProductSearch.vue -->
<!-- Kita akan tambah halaman /products/search yang bisa kita gunakan untuk mencari data product
  -->
<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const products = ref([]);       
const route = useRoute();
// const search = route.query.product || '';

watchEffect(() => {
  // baca langsung route.query.product di sini supaya watchEffect punya dependency reaktif
  const search = (route.query.product || '').toString().toLowerCase()

  // fetch produk dari API
  fetch('/api/products.json')
   // response.json() akan mengembalikan Promise yang resolve dengan data JSON
    .then(res => {
        // cek apakah response berhasil
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      // pastikan response adalah JSON
      return res.json()
    })
    // kemudian kita dapatkan data produk
    .then(allProducts => {
      // pastikan allProducts adalah array
      if (!Array.isArray(allProducts)) {
        products.value = []
        return
      }

      if (!search) {
        // jika search kosong, tampilkan semua (atau kosongkan sesuai kebutuhan)
        products.value = allProducts
      } else {
        // filter produk berdasarkan nama yang mengandung search
        products.value = allProducts.filter(p =>
          String(p.name || '').toLowerCase().includes(search)
        )
      }
    })
    // tangani error jika fetch gagal
    .catch(err => {
      console.error('Fetch error', err)
      // jika terjadi error, kita bisa kosongkan produk atau tampilkan pesan error
      products.value = []
    })
})

// watchEffect(() => {
//     fetch('/api/products.json')
//     .then(response => response.json())
//     .then(products => products.filter(product => product.name.includes(search)))
//     .then(data => products.value = data)
// })
</script>

<template>
  <div>
    <h1>Product Search</h1>
    <p>Search for products here.</p>
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