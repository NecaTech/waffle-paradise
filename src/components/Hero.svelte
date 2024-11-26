<script>
  import { onMount } from 'svelte';
  let gsap;

  onMount(async () => {
    try {
      if (typeof window !== 'undefined') {
        const gsapModule = await import('gsap');
        gsap = gsapModule.default;
        
        const tl = gsap.timeline();
        tl.from('.hero-text', {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power4.out'
        })
        .from('.hero-description', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power4.out'
        }, '-=0.5')
        .from('.cta-button', {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(1.7)'
        }, '-=0.5');
      }
    } catch (error) {
      console.error('Error loading GSAP:', error);
    }
  });
</script>

<section class="relative h-screen flex items-center justify-center overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
       style="background-image: url('/images/hero-bg.jpg');">
    <div class="absolute inset-0 bg-chocolate/50"></div>
  </div>
  
  <div class="relative container mx-auto px-4 text-center text-vanilla">
    <h1 class="hero-text font-playfair text-5xl md:text-7xl mb-6">
      L'art de la gaufre gourmande
    </h1>
    <p class="hero-description text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
      Découvrez nos gaufres artisanales, un délicieux mélange de tradition et d'innovation
    </p>
    <a href="#menu" 
       class="cta-button inline-block bg-raspberry hover:bg-brown text-vanilla px-8 py-3 rounded-full transition-colors duration-300 transform hover:scale-105">
      Découvrir nos gaufres
    </a>
  </div>
</section>