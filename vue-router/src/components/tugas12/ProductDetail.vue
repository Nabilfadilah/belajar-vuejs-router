<!-- Tugas 2: Membuat komponen ProductDetail.vue yang menampilkan detail produk -->
<!-- Buatlah halaman product detail, dimana kita akan menggunakan AJAX untuk menampilkan data product berdasarkan id product yang dipilih di route param -->

<script setup>
import { ref, watchEffect } from 'vue';
// import { useRoute } from 'vue-router';

// router param sebagai props
const {id} = defineProps(['id']);

const loaded = ref(false); // Menandakan apakah data produk sudah dimuat
const error = ref(false);  // Menandakan apakah terjadi kesalahan saat memuat data produk
const product = ref(null); // Menyimpan data produk yang akan ditampilkan
// const route = useRoute(); // menggunakan useRoute untuk mendapatkan parameter dari URL

watchEffect(() => { 
    if(id) {
    // fetch data produk berdasarkan ID dari parameter URL
    fetch(`/api/products/${id}.json`) // tugas 12: menggunakan id dari props
    // fetch(`/api/products/${route.params.id}.json`)
        // Menggunakan fetch untuk mendapatkan data produk berdasarkan ID dari parameter URL
        .then(response => {
            // Memeriksa apakah respons berhasil
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Mengonversi respons menjadi JSON
            return response.json();
        })
        // Mengonversi respons JSON menjadi objek JavaScript
        .then(data => {
            product.value = data;
            loaded.value = true;
            error.value = false;
        })
        // Menangani kesalahan jika terjadi saat pengambilan data
        .catch(err => {
            console.error('Fetch error:', err);
            error.value = true;
            loaded.value = false;
        });
    }
})
</script>

<template>
    <!-- Menampilkan detail produk jika data sudah dimuat -->
    <div v-if="id && loaded">
        <template v-if="product">
            <h1>{{ product.id }} - {{ product.name }}</h1>
            <p>Deskripsi: {{ product.description }}</p>
            <p>Price: {{ product.price }}</p>
        </template>
    </div>
    <div v-else-if="error">
        <p>Error loading product details : {{ $route.params.id }}</p>
    </div>
    <div v-else>
        <h1>Loading product : {{ $route.params.id }}</h1>
    </div>
</template>

<style scoped>

</style>