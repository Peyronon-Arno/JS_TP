jQuery(document).ready(function() {
    /* On surveille les cliques sur les liens du menu */
    jQuery(".tab-nav a").click(function(e) {
        /* On désactive l'action par défaut des liens */
        e.preventDefault();


        /* On récupère la valeur de l'onglet à activer */
        let tab = jQuery(this).data("tab");


        /* On masque tous les contenus */
        jQuery(".tab").removeClass("tab-active");


        /* On affiche le contenu qui doit l'être avec tab active */
        jQuery("#" + tab).addClass("tab-active");


        /* On désactive tous les onglets en enlevant la class active */
        jQuery(".tab-nav a").removeClass("tab-nav-active");

        /* On active l'onglet qui a été cliqué en ajoutant la class active */
        jQuery(this).addClass("tab-nav-active");
    });
});