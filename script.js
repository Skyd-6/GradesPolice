const grades = [
    {
      nom: "Réserviste",
      appellation: "Réserviste",
      description: "Fond bleu clair",
      image: "Images/1reserviste.png"
    },
    {
      nom: "Policier adjoint",
      appellation: "Adjoint",
      description: "Fond bleu loire",
      image: "Images/2adjoint.png"
    },
    {
        nom: "Gardien de la paix élève",
        appellation: "Gardien",
        description: "Fond noir",
        image: "Images/3gpxEleve.png   "
      },
      {
        nom: "Gardien de la paix stagiaire",
        appellation: "Gardien",
        description: "Un chevron blanc",
        image: "Images/4gpxStagiaire.png"
      },
      {
        nom: "Gardien de la paix",
        appellation: "Gardien",
        description: "Deux chevrons blancs",
        image: "Images/5gpx.png"
      },
      {
        nom: "Gardien de la paix",
        appellation: "Sous brigadier",
        description: "Trois chevrons blancs",
        image: "Images/6sousBrigadier.png"
      },
      {
        nom: "Brigadier-chef de police",
        appellation: "Brigadier-chef",
        description: "Un galon blanc avec raie rouge",
        image: "Images/7brigadierChef.png"
      },
      {
        nom: "Major de police",
        appellation: "Major",
        description: "Un galon blanc avec raie roue, un liseré blanc",
        image: "Images/8major.png"
      },
      {
        nom: "Major de police, responsable d'une unité locale de police",
        appellation: "Major",
        description: "Un galon blanc avec raie rouge, un liseré blanc, un losange blanc",
        image: "Images/9majorRulp.png"
      },
      {
        nom: "Capitaine de police élève",
        appellation: "Lieutenant",
        description: "Un alpha blanc",
        image: "Images/10lieutenantEleve.png"
      },
      {
        nom: "Capitaine de police stagiaire",
        appellation: "Lieutenant",
        description: "Un galon blanc",
        image: "Images/11lieutenantStagiaire.png"
      },
      {
        nom: "Capitaine de police",
        appellation: "Lieutenant",
        description: "Deux galons blancs",
        image: "Images/12lieutenant.png"
      },
      {
        nom: "Capitaine de police",
        appellation: "Capitaine",
        description: "Trois galons blancs",
        image: "Images/13capitaine.png"
      },
      {
        nom: "Commandant de police",
        appellation: "Commandant",
        description: "Quatre galons blancs",
        image: "Images/14commandant.png"
      },
      {
        nom: "Commandant divisionnaire",
        appellation: "Commandant divisionnaire",
        description: "Quatre galons blancs, une pointe de diamant or",
        image: "Images/15commandantDivisionnaire.png"
      },
      {
        nom: "Commandant divisionnaire fonctionnel",
        appellation: "Commandant divisionnaire",
        description: "Quatre galons blancs, une pointe de diamant blanc",
        image: "Images/24commandantDivisionnaireFonctionnel.png"
      },
      {
        nom: "Elève commissaire",
        appellation: "Monsieur / Madame le commissaire",
        description: "Une branche de chêne trois feuilles",
        image: "Images/16commissaireEleve.png"
      },
      {
        nom: "Commissaire de police",
        appellation: "Monsieur / Madame le commissaire",
        description: "Une branche de chêne cinq feuilles, un gland",
        image: "Images/17commissaire.png"
      },
      {
        nom: "Commissaire divisionnaire",
        appellation: "Monsieur / Madame le commissaire divisionnaire",
        description: "Une branche de chêne sept feuilles, deux glands, deux barettes",
        image: "Images/18commissaireDivisionnaire.png"
      },
      {
        nom: "Commissaire général",
        appellation: "Monsieur / Madame le commissaire général",
        description: "Une branche de chêne neuf feuilles, trois glands, deux pointes de diamant or",
        image: "Images/19commissaireGeneral.png"
      },
      {
        nom: "Contrôleur général",
        appellation: "Monsieur / Madame le contrôleur général",
        description: "Une branche de chêne neuf feuilles, trois glands, deux pointes de diamant blanc",
        image: "Images/20controleurGeneral.png"
      },
      {
        nom: "Inspecteur général",
        appellation: "Madame / Monsieur l'inspecteur général",
        description: "Une branche de chêne neuf feuilles, trois glands, trois pointes de diamant blanc",
        image: "Images/21inspecteurGeneral.png"
      },
      {
        nom: "Directeur des services actifs",
        appellation: "Madame / Monsieur le directeur",
        description: "Une branche de chêne neuf feuilles, trois glands, quatre pointes de diamant blanc",
        image: "Images/22directeurDesServicesActifs.png"
      },
      {
        nom: "Directeur général de la police nationale",
        appellation: "Madame / Monsieur le directeur général",
        description: "Une branche de chêne neuf feuilles, trois glands, cinq pointes de diamant blanc",
        image: "Images/23directeurGeneral.png"
      },
    // Tu peux ajouter tous les autres grades ici
  ];
  
  let gradeActuel = null;
  
  function afficherGrade() {
    gradeActuel = grades[Math.floor(Math.random() * grades.length)];
  
    document.getElementById("gradeImage").src = gradeActuel.image;
    document.getElementById("gradeDisplay").classList.remove("hidden");
  
    // Vider les champs
    document.getElementById("inputNom").value = "";
    document.getElementById("inputAppellation").value = "";
    document.getElementById("inputDescription").value = "";
  
    // Réinitialiser le résultat
    document.getElementById("resultat").textContent = "";
    document.getElementById("resultat").className = "resultat";
  }
  
  function verifierReponses() {
    const inputNom = document.getElementById("inputNom").value.trim().toLowerCase();
    const inputAppellation = document.getElementById("inputAppellation").value.trim().toLowerCase();
    const inputDescription = document.getElementById("inputDescription").value.trim().toLowerCase();
  
    const nomCorrect = gradeActuel.nom.toLowerCase();
    const appellationCorrect = gradeActuel.appellation.toLowerCase();
    const descriptionCorrect = gradeActuel.description.toLowerCase();
  
    let score = 0;
    if (inputNom === nomCorrect) score++;
    if (inputAppellation === appellationCorrect) score++;
    if (inputDescription === descriptionCorrect) score++;
  
    const resultat = document.getElementById("resultat");
  
    if (score === 3) {
      resultat.textContent = "Bravo, tu as tout juste ! ✅";
      resultat.classList.add("good");
    } else {
      resultat.textContent = `Raté, essaie encore 😬 (${score}/3 corrects)`;
      resultat.classList.add("bad");
    }
  }
  
  const inputs = document.querySelectorAll("#inputNom, #inputAppellation, #inputDescription");
inputs.forEach(input => {
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Empêche le comportement par défaut (genre soumission de formulaire)
      verifierReponses(); // Appelle la fonction de vérif
    }
  });
});
