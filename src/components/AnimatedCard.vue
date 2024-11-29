<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const cardRef = ref(null)

onMounted(() => {
  // Animation initiale
  gsap.from(cardRef.value, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
})

const animateCard = () => {
  gsap.to(cardRef.value, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
    yoyo: true,
    repeat: 1
  })
}
</script>

<template>
  <div 
    ref="cardRef"
    @click="animateCard"
    class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl cursor-pointer"
  >
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        Animation Example
      </div>
      <p class="mt-2 text-slate-500">
        Click me to see a GSAP animation! This card uses both Tailwind CSS for styling and GSAP for smooth animations.
      </p>
      <div class="mt-4 flex gap-2">
        <span class="inline-block bg-indigo-100 rounded-full px-3 py-1 text-sm font-semibold text-indigo-600">
          #GSAP
        </span>
        <span class="inline-block bg-indigo-100 rounded-full px-3 py-1 text-sm font-semibold text-indigo-600">
          #Tailwind
        </span>
      </div>
    </div>
  </div>
</template>
