
// ======================================
// 1. RÉCUPÉRATION DU FORMULAIRE
// ======================================

const formulaire = document.getElementById("devis-form");


// ======================================
// 2. NUMÉRO WHATSAPP DE L'ENTREPRISE
// ======================================

const numeroWhatsApp = "2250566899506";


// ======================================
// 3. GESTION DE L'ENVOI DU FORMULAIRE
// ======================================

formulaire.addEventListener("submit", function(event) {

    // Empêcher le rechargement de la page
    event.preventDefault();


    // Récupérer les informations du client

    const nom = document.getElementById("nom").value.trim();

    const telephone = document.getElementById("telephone").value.trim();

    const service = document.getElementById("service").value;

    const quantite = document.getElementById("quantite").value;

    const format = document.getElementById("format").value.trim();

    const message = document.getElementById("message").value.trim();


    // ======================================
    // 4. CONSTRUIRE LE MESSAGE WHATSAPP
    // ======================================

    const texteWhatsApp =

        "Bonjour La Brochure Lumena-Group !\n\n" +

        "Je souhaite obtenir un devis pour un travail .\n\n" +

        "INFORMATIONS DU CLIENT\n" +

        "Nom : " + nom + "\n" +

        "Téléphone : " + telephone + "\n\n" +

        "DÉTAILS DE LA COMMANDE\n" +

        "Service demandé : " + service + "\n" +

        "Quantité : " + quantite + "\n" +

        "Format : " + (format || "Non précisé") + "\n\n" +

        "Description du projet :\n" +

        (message || "Aucune description supplémentaire") + "\n\n" +

        "Merci de me communiquer votre devis.";


    // ======================================
    // 5. OUVRIR WHATSAPP
    // ======================================

    const lienWhatsApp =

        "https://wa.me/" +

        numeroWhatsApp +

        "?text=" +

        encodeURIComponent(texteWhatsApp);


    window.open(lienWhatsApp, "_blank");

});
