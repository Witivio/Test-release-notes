<template>
    <main class="home">
        <div class="translate_page">
        <!-- Code de chargement du bouton de traduction ici -->
      
            
            <div id="google_translate_element"></div>
        </div>
    </main>
  </template>
  
  <script>
  function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    'google_translate_element',
    {
      pageLanguage: 'en', // Langue de votre site web
      includedLanguages: 'fr', // Langues disponibles pour la traduction
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Disposition du bouton
    },
    
  );
}
  export default {
    name: 'Translator',
    mounted() {
    // Initialisation du bouton de traduction Google Translate


    // Chargez le script de Google Translate
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onload = googleTranslateElementInit()
   // setTimeout(googleTranslateElementInit(), 500);
    document.head.appendChild(script);
  },
  };
  </script>

<style lang="stylus">

.translate_page
    width 100%
    height 50vh
    display flex
    flex-direction column
    justify-content space-evenly
    align-items center

.translate_container
    display flex 
    flex-direction column 
    align-items center

.translate_button
    width 7rem
    height 2rem
    border: 2px solid rgba($borderColor, 1)
    background-color rgba($borderColor, 0.1)
    
.translate_button:hover
    transition: all .2s
    cursor: pointer
    box-shadow: rgb(144, 49, 99) 2px 2px 6px 0px , rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

.goog-te-combo {
    width: 10rem !important;
    height: 1.5rem !important;
    border: 2px solid rgba($borderColor, 1) !important
    background-color rgba($borderColor, 0.1) !important
    font-size: 14px !important;
    padding: 0 !important;
}

/* Positionnement du bouton dans un coin de la page */
.goog-te-banner-frame.skiptranslate {
  top: 10px !important;
  right: 10px !important;
}

/* Personnalisation du texte du bouton */
.goog-te-menu-value span {
  font-size: 14px !important;
}

.VIpgJd-ZVi9od-ORHb-OEVmcd
    display none !important

</style>
