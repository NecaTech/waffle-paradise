<script>
  import { onMount } from 'svelte';
  
  let isMenuOpen = false;
  let isScrolled = false;
  let activeSection = '';
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
      
      // Update active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          activeSection = section.id;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class="fixed w-full z-50 transition-all duration-300" class:bg-vanilla={isScrolled} class:bg-transparent={!isScrolled}>
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <a href="#" class="text-2xl font-playfair font-bold text-raspberry">
        Waffle Paradise
      </a>
      
      <!-- Mobile menu button -->
      <button class="lg:hidden" on:click={toggleMenu}>
        <div class="w-6 h-6 flex flex-col justify-around">
          <span class="w-full h-0.5 bg-chocolate transform transition-all duration-300"
                class:rotate-45={isMenuOpen}
                class:translate-y-2={isMenuOpen}></span>
          <span class="w-full h-0.5 bg-chocolate transition-all duration-300"
                class:opacity-0={isMenuOpen}></span>
          <span class="w-full h-0.5 bg-chocolate transform transition-all duration-300"
                class:-rotate-45={isMenuOpen}
                class:-translate-y-2={isMenuOpen}></span>
        </div>
      </button>
      
      <!-- Desktop menu -->
      <div class="hidden lg:flex space-x-8">
        <a href="#menu" class="nav-link" class:active={activeSection === 'menu'}>Menu</a>
        <a href="#about" class="nav-link" class:active={activeSection === 'about'}>À propos</a>
        <a href="#contact" class="nav-link" class:active={activeSection === 'contact'}>Contact</a>
      </div>
    </div>
    
    <!-- Mobile menu -->
    {#if isMenuOpen}
    <div class="lg:hidden absolute top-full left-0 w-full bg-vanilla shadow-lg py-4 px-4">
      <div class="flex flex-col space-y-4">
        <a href="#menu" class="nav-link" on:click={() => isMenuOpen = false}>Menu</a>
        <a href="#about" class="nav-link" on:click={() => isMenuOpen = false}>À propos</a>
        <a href="#contact" class="nav-link" on:click={() => isMenuOpen = false}>Contact</a>
      </div>
    </div>
    {/if}
  </nav>
</header>

<style>
  .nav-link {
    @apply text-chocolate hover:text-raspberry transition-colors duration-300;
  }
  
  .nav-link.active {
    @apply text-raspberry font-semibold;
  }
</style>