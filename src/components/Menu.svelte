<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  let selectedCategory = 'all';
  let showModal = false;
  let selectedWaffle = null;
  
  const waffles = [
    {
      id: 1,
      name: 'La Classique',
      description: 'Notre gaufre traditionnelle au sucre glace',
      price: '5.50',
      category: 'sucree',
      ingredients: ['Farine', 'Œufs', 'Lait', 'Beurre', 'Sucre vanillé'],
      image: '/images/classic.jpg'
    },
    {
      id: 2,
      name: 'La Gourmande',
      description: 'Nutella, chantilly et fruits rouges',
      price: '8.50',
      category: 'sucree',
      ingredients: ['Gaufre classique', 'Nutella', 'Chantilly', 'Fruits rouges'],
      image: '/images/gourmande.jpg'
    },
    {
      id: 3,
      name: 'La Salée',
      description: 'Jambon, fromage et œuf',
      price: '9.50',
      category: 'salee',
      ingredients: ['Gaufre salée', 'Jambon', 'Fromage', 'Œuf'],
      image: '/images/salee.jpg'
    }
  ];
  
  function filterWaffles() {
    return selectedCategory === 'all' 
      ? waffles 
      : waffles.filter(w => w.category === selectedCategory);
  }
  
  function openModal(waffle) {
    selectedWaffle = waffle;
    showModal = true;
  }
  
  onMount(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  });
</script>

<section id="menu" class="py-20">
  <div class="container mx-auto px-4">
    <h2 class="font-playfair text-4xl md:text-5xl text-center mb-12" data-aos="fade-up">
      Nos Créations
    </h2>
    
    <div class="flex justify-center mb-8 space-x-4" data-aos="fade-up">
      <button 
        class="px-4 py-2 rounded-full transition-colors duration-300"
        class:bg-raspberry={selectedCategory === 'all'}
        class:text-vanilla={selectedCategory === 'all'}
        class:bg-vanilla={selectedCategory !== 'all'}
        class:text-chocolate={selectedCategory !== 'all'}
        on:click={() => selectedCategory = 'all'}>
        Toutes
      </button>
      <button 
        class="px-4 py-2 rounded-full transition-colors duration-300"
        class:bg-raspberry={selectedCategory === 'sucree'}
        class:text-vanilla={selectedCategory === 'sucree'}
        class:bg-vanilla={selectedCategory !== 'sucree'}
        class:text-chocolate={selectedCategory !== 'sucree'}
        on:click={() => selectedCategory = 'sucree'}>
        Sucrées
      </button>
      <button 
        class="px-4 py-2 rounded-full transition-colors duration-300"
        class:bg-raspberry={selectedCategory === 'salee'}
        class:text-vanilla={selectedCategory === 'salee'}
        class:bg-vanilla={selectedCategory !== 'salee'}
        class:text-chocolate={selectedCategory !== 'salee'}
        on:click={() => selectedCategory = 'salee'}>
        Salées
      </button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filterWaffles() as waffle}
        <div 
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          data-aos="fade-up"
          on:click={() => openModal(waffle)}>
          <img 
            src={waffle.image} 
            alt={waffle.name}
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="font-playfair text-xl mb-2">{waffle.name}</h3>
            <p class="text-gray-600 mb-4">{waffle.description}</p>
            <p class="text-raspberry font-semibold">{waffle.price}€</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  {#if showModal}
    <div class="fixed inset-0 bg-chocolate/80 flex items-center justify-center z-50">
      <div class="bg-vanilla p-8 rounded-lg max-w-2xl w-full mx-4">
        <h3 class="font-playfair text-2xl mb-4">{selectedWaffle.name}</h3>
        <img 
          src={selectedWaffle.image} 
          alt={selectedWaffle.name}
          class="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p class="mb-4">{selectedWaffle.description}</p>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Ingrédients :</h4>
          <ul class="list-disc list-inside">
            {#each selectedWaffle.ingredients as ingredient}
              <li>{ingredient}</li>
            {/each}
          </ul>
        </div>
        <p class="text-raspberry font-semibold text-xl mb-4">{selectedWaffle.price}€</p>
        <button 
          class="bg-raspberry text-vanilla px-6 py-2 rounded-full hover:bg-brown transition-colors"
          on:click={() => showModal = false}>
          Fermer
        </button>
      </div>
    </div>
  {/if}
</section>