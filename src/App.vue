<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AnimatedCard from './components/AnimatedCard.vue'
</script>

<template>
  <header class="bg-indigo-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="text-white font-bold text-xl">
            Waffle Paradise
          </div>
        </div>
        <div class="flex space-x-4">
          <RouterLink 
            to="/" 
            class="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <AnimatedCard />
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
/* No styles defined */
</style>
