import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          users: [
            './src/components/tugas9/User.vue',
            './src/components/tugas9/UserHeader.vue',
            './src/components/tugas4/UserProfile.vue',
            './src/components/tugas4/UserOrder.vue',
            './src/components/tugas4/UserWishlist.vue',
            './src/components/tugas9/UserOrderFooter.vue',
            './src/components/tugas9/UserWishlistFooter.vue', 
          ]
        }
      }
    }
  } 
})
