<script>
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  let isSubmitting = false;
  let showSuccess = false;
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function handleSubmit() {
    if (!formData.name || !validateEmail(formData.email) || !formData.message) {
      return;
    }
    
    isSubmitting = true;
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      isSubmitting = false;
      showSuccess = true;
      formData = {
        name: '',
        email: '',
        message: ''
      };
      
      setTimeout(() => {
        showSuccess = false;
      }, 3000);
    }, 1000);
  }
</script>

<section id="contact" class="py-20 bg-chocolate text-vanilla">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <h2 class="font-playfair text-4xl md:text-5xl mb-6">Contactez-nous</h2>
        <p class="mb-8">Une question ? Une réservation ? N'hésitez pas à nous contacter !</p>
        
        <div class="mb-8">
          <h3 class="font-playfair text-2xl mb-4">Nos coordonnées</h3>
          <p class="mb-2">123 Rue des Gaufres</p>
          <p class="mb-2">75001 Paris</p>
          <p class="mb-2">Tél : 01 23 45 67 89</p>
          <p>Email : contact@waffleparadise.fr</p>
        </div>
        
        <div>
          <h3 class="font-playfair text-2xl mb-4">Horaires d'ouverture</h3>
          <p class="mb-2">Lundi - Vendredi : 10h - 19h</p>
          <p>Samedi - Dimanche : 9h - 20h</p>
        </div>
      </div>
      
      <div>
        <form class="bg-vanilla text-chocolate p-8 rounded-lg" on:submit|preventDefault={handleSubmit}>
          <div class="mb-6">
            <label for="name" class="block mb-2">Nom</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              class="w-full px-4 py-2 rounded border border-gray-300 focus:border-raspberry focus:ring focus:ring-raspberry/20 outline-none"
              required
            />
          </div>
          
          <div class="mb-6">
            <label for="email" class="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              class="w-full px-4 py-2 rounded border border-gray-300 focus:border-raspberry focus:ring focus:ring-raspberry/20 outline-none"
              required
            />
          </div>
          
          <div class="mb-6">
            <label for="message" class="block mb-2">Message</label>
            <textarea
              id="message"
              bind:value={formData.message}
              class="w-full px-4 py-2 rounded border border-gray-300 focus:border-raspberry focus:ring focus:ring-raspberry/20 outline-none h-32"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            class="w-full bg-raspberry text-vanilla py-3 rounded-full hover:bg-brown transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
          
          {#if showSuccess}
            <p class="mt-4 text-center text-green-600">
              Message envoyé avec succès !
            </p>
          {/if}
        </form>
      </div>
    </div>
  </div>
</section>