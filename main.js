const prompt = require("prompt-sync")();
let choice;
let opNum;
let livres = [
  {
    id_livre: "123",
    titre: "Le Petit Prince",
    auteur: "Saint-Exupéry",
    annee: 1943,
    disponible: "non",
  },
  {
    id_livre: "456",
    titre: "L'Étranger",
    auteur: "Camus",
    annee: 1942,
    disponible: "non",
  },
  {
    id_livre: "456",
    titre: "A'Étranger",
    auteur: "Camus",
    annee: 1942,
    disponible: "non",
  },
  {
    id_livre: "456",
    titre: "C'Étranger",
    auteur: "Camus",
    annee: 1942,
    disponible: "non",
  },
  {
    id_livre: "456",
    titre: "B'Étranger",
    auteur: "Camus",
    annee: 1942,
    disponible: "non",
  },
];
function menu() {
  console.log("------Menu------");
  console.log(
    " 1. Introduire un livre \n 2. Ajouter plusieurs livres \n 3. Opérations sur les livres \n 4. Gestion des abonnés \n 5. Gestion des emprunts \n 6. Quitter l’application"
  );
  choice = Number(prompt(": "));
}
function menu2() {
  console.log("------Opérations sur les livres------");
  console.log(
    " 1. Afficher tous les livres \n 2. Trier les livres par titre (ascendant/descendant) \n 3. Trier les livres par année de publication \n 4. Afficher uniquement les livres disponibles \n 5. Rechercher un livre par ID_livre \n 6. Quitter l’application"
  );
  opNum = Number(prompt(": "));
}
do {
  menu();
  switch (choice) {
    case 1:
      introduire();
      break;
    case 2:
      ajouterPlusieur();
      break;
    case 3:
      operationsEnLivres();
      break;
    case 4:
      break;
    case 5:
      break;
  }
} while (choice !== 6);

function addLivre(nom, auteur, annee, disponible ) {
  this.id_livre = livres.length+1;
  this.titre = nom;
  this.auteur = auteur;
  this.annee = Number(annee);
  this.disponible = disponible;
}

function introduire() {
  let livre = prompt("Entrez le nom de livre : ");
  let auteur = prompt("Entrez le auteur de livre  : ");
  let annee = prompt("Entrez l'annee de livre : ");
  let disponible = prompt("ce livre est-il disponible oui/non ? : ");
  livres.push(new addLivre(livre, auteur, annee, disponible));
}

function ajouterPlusieur() {
  let numberOfLivres = Number(
    prompt("Combien de livres souhaitez-vous ajouter ? : ")
  );
  for (let index = 0; index < numberOfLivres; index++) {
    console.log("-".repeat(30));
    introduire();
  }
  console.log("-".repeat(30));
}

function operationsEnLivres() {
  do {
    menu2();
    switch (opNum) {
      case 1:
        afficherAll();
        operationsEnLivres();
        break;
      case 2:
        sortArrayByAlphab();
        operationsEnLivres();
        break;
      case 3:
        sortArrayByAnnee();
        operationsEnLivres();
        break;
      case 4:
        AfficherLivresDisponibles();
        operationsEnLivres();
        break;
      case 5:
        RechercherLivre();
        operationsEnLivres();
        break;
    }
  } while (opNum !== 6);
}

function afficherAll() {
  if (livres.length == 0) {
    console.log("-".repeat(30));
    console.log("aucun livre fondé");
    console.log("-".repeat(30));
  } else {
    for (let i in livres) {
      console.log("-".repeat(30));
      console.log(
        "- Id",
        livres[i].id_livre,
        "- Titre: ",
        livres[i].titre,
        "- Auteur: ",
        livres[i].auteur,
        "- Anne: ",
        livres[i].annee,
        "- disponible? : " + livres[i].disponible
      );
    }
    console.log("-".repeat(30));
  }
}

function sortArrayByAlphab() {
  if (livres.length == 0) {
    console.log("-".repeat(30));
    console.log("aucun livre fondé");
    console.log("-".repeat(30));
  } else {
    let choice;
    console.log("-".repeat(30));
    choice = Number(prompt("1 pour ascendant et 2 pour descendant : "));
    console.log("-".repeat(30));
    if (choice == 1) {
      let ascendantLivres = livres.sort((a, b) =>
        a.titre.localeCompare(b.titre)
      );
      for (let i in ascendantLivres) {
        console.log("-".repeat(30));
        console.log(
          "- Id",
          ascendantLivres[i].id_livre,
          "- Titre: ",
          ascendantLivres[i].titre,
          "- Auteur: ",
          ascendantLivres[i].auteur,
          "- Anne: ",
          ascendantLivres[i].annee,
          "- disponible? : " + livres[i].disponible
        );
      }
      console.log("-".repeat(30));
    } else if (choice == 2) {
      let descendantLivres = livres.sort((a, b) =>
        b.titre.localeCompare(a.titre)
      );
      for (let i in descendantLivres) {
        console.log("-".repeat(30));
        console.log(
          "- Id",
          descendantLivres[i].id_livre,
          "- Titre: ",
          descendantLivres[i].titre,
          "- Auteur: ",
          descendantLivres[i].auteur,
          "- Anne: ",
          descendantLivres[i].annee,
          "- disponible? : " + livres[i].disponible
        );
      }
      console.log("-".repeat(30));
    }
  }
}

function sortArrayByAnnee() {
  if (livres.length == 0) {
    console.log("-".repeat(30));
    console.log("aucun livre fondé");
    console.log("-".repeat(30));
  } else {
    let sortOrder = Number(prompt("1 pour ascendant et 2 pour descendant : "));
    if (sortOrder == 1) {
      let livresByAnne = livres.sort((a, b) => b.annee - a.annee);
      for (let i in livresByAnne) {
        console.log("-".repeat(30));
        console.log(
          "- Id",
          livresByAnne[i].id_livre,
          "- Titre: ",
          livresByAnne[i].titre,
          "- Auteur: ",
          livresByAnne[i].auteur,
          "- Anne: ",
          livresByAnne[i].annee,
          "- disponible? : " + livres[i].disponible
        );
      }
      console.log("-".repeat(30));
    } else if (sortOrder == 2) {
      let livresByAnne = livres.sort((a, b) => a.annee - b.annee);
      for (let i in livresByAnne) {
        console.log("-".repeat(30));
        console.log(
          "- Id",
          livresByAnne[i].id_livre,
          "- Titre: ",
          livresByAnne[i].titre,
          "- Auteur: ",
          livresByAnne[i].auteur,
          "- Anne: ",
          livresByAnne[i].annee,
          "- disponible? : " + livres[i].disponible
        );
      }
      console.log("-".repeat(30));
    }
  }
}

function AfficherLivresDisponibles() {
  let livresDispo = [];
  for (let i in livres) {
    if (livres[i].disponible === "oui") {
      livresDispo.push(livres[i]);
    }
  }
  if (livresDispo.length == 0) {
    console.log("-".repeat(30));
    console.log("aucun livre fondé");
    console.log("-".repeat(30));
  } else {
    for (let i in livresDispo) {
      console.log("-".repeat(30));
      console.log(
        "- Id",
        livresDispo[i].id_livre,
        "- Titre: ",
        livresDispo[i].titre,
        "- Auteur: ",
        livresDispo[i].auteur,
        "- Anne: ",
        livresDispo[i].annee,
        "- disponible? : " + livresDispo[i].disponible
      );
      console.log("-".repeat(30));
    }
  }
}

function RechercherLivre() {
  console.log("-".repeat(30));
  let livreId = Number(prompt("Entre id: "));
  console.log("-".repeat(30));
  let livreFonde = [];
  for (let index in livres) {
    if (livres[index].id_livre == livreId) {
      livreFonde.push(livres[index]);
    }
  }
  if (livreFonde.length == 0) {
    console.log("-".repeat(30));
    console.log("aucun livre fondé");
    console.log("-".repeat(30));
  } else {
    for (let i in livreFonde) {
      console.log("-".repeat(30));
      console.log(
        "- Id",
        livreFonde[i].id_livre,
        "- Titre: ",
        livreFonde[i].titre,
        "- Auteur: ",
        livreFonde[i].auteur,
        "- Anne: ",
        livreFonde[i].annee,
        "- disponible? : " + livreFonde[i].disponible
      );
    }
    console.log("-".repeat(30));
  }
}

