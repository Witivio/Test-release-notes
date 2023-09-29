<template>
    <div>
      <!-- Code de chargement du bouton de traduction ici -->
      <div value="en" id="google_translate_element"></div>

        <button @click="changeLanguage">
            <option value="fr">Translate</option>
        </button>
    </div>
  </template>
  
  <script>
  function googleTranslateElementInit(selectedLanguage) {
  new google.translate.TranslateElement(
    'google_translate_element',
    {
      pageLanguage: 'en', // Langue de votre site web
      includedLanguages: selectedLanguage, // Langues disponibles pour la traduction
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Disposition du bouton
    },
    
  );
}
  export default {
    name: 'Translator',
    methods: {
        changeLanguage(event) {
          // Code pour changer la langue ici
          const selectedLanguage = event.target.value;
          // Utilisez la langue sélectionnée pour mettre à jour la traduction
          googleTranslateElementInit(selectedLanguage);
        },
    },
    mounted() {
    // Initialisation du bouton de traduction Google Translate


    // Chargez le script de Google Translate
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
  },
  };
  </script>