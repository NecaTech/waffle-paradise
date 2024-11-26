<script>
  import { onMount } from 'svelte';
  
  let gsap;
  let ScrollTrigger;

  onMount(async () => {
    try {
      if (typeof window !== 'undefined') {
        const gsapModule = await import('gsap');
        const scrollTriggerModule = await import('gsap/ScrollTrigger');
        
        gsap = gsapModule.default;
        ScrollTrigger = scrollTriggerModule.default;
        
        gsap.registerPlugin(ScrollTrigger);
        
        const numbers = document.querySelectorAll('.number');
        
        numbers.forEach(number => {
          const target = parseInt(number.getAttribute('data-target'));
          gsap.to(number, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: number,
              start: 'top 80%'
            }
          });
        });
      }
    } catch (error) {
      console.error('Error loading GSAP:', error);
    }
  });
</script>

<section id="about" class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h2 class="font-playfair text-4xl md:text-5xl mb-6">Notre Histoire</h2>
        <p class="mb-4">Depuis 2010, Waffle Paradise réinvente l'art de la gaufre artisanale. Notre passion pour les saveurs authentiques et notre créativité nous poussent à créer des recettes uniques qui ravissent les papilles de nos clients.</p>
        <p>Chaque gaufre est préparée à la minute avec des ingrédients soigneusement sélectionnés, pour vous offrir une expérience gustative inoubliable.</p>
      </div>
      <div class="relative">
        <img 
          src="/images/about.jpg" 
          alt="Notre histoire" 
          class="rounded-lg shadow-xl"
        />
      </div>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <span class="number text-4xl font-bold text-raspberry block mb-2" data-target="12">0</span>
        <span class="text-gray-600">Années d'expérience</span>
      </div>
      <div>
        <span class="number text-4xl font-bold text-raspberry block mb-2" data-target="20">0</span>
        <span class="text-gray-600">Recettes uniques</span>
      </div>
      <div>
        <span class="number text-4xl font-bold text-raspberry block mb-2" data-target="50000">0</span>
        <span class="text-gray-600">Clients satisfaits</span>
      </div>
      <div>
        <span class="number text-4xl font-bold text-raspberry block mb-2" data-target="2">0</span>
        <span class="text-gray-600">Boutiques</span>
      </div>
    </div>
  </div>
</section>