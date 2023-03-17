//On initialise ces 2 variables ici afin que leur scoop soit sur l'ensemble du fichier et pouvoir les utiliser dans la fonction affichage.
let nombreEntre;
let base;

//Fonction qui va permettre d'afficher le résultat de l'opération.
const affichage = (tableau) => {
  //On initialise une variable résultat.
  let resultat = "";
  //Boucle sur le tableau en fonction de sa taille.
  for (let index = 0; index < tableau.length; index++) {
    //On ajoute à la variable resultat la valeur du tableau à l'indice en cours.
    resultat += tableau[index];
  }
  //On récupère l'élément resultat du HTML dans la variable affiche.
  let affiche = document.getElementById("resultat");
  //On injecte du HTML dans la variable affiche avec les valeurs de nombreEntre, resultat et base.
  affiche.innerHTML = `Le nombre ${nombreEntre} vaut ${resultat} en base ${base}`;
};

//Fonction de conversion.
const conversion = (nombre, base) => {
  //On initialise un tableau vide.
  let tableau_nombre = [];
  //On divise le nombre par la base. On redivise le quotient récupéré par la base jusqu'à ce que le quotient vaut 0.
  do {
    //Le reste de la division est le resultat du modulo de ces 2 nombres.
    let reste = nombre % base;
    //On ajoute à chaque fois au début du tableau le reste de l'opération précédente.
    tableau_nombre.unshift(reste);
    // Le nombre devient la partie entière de l'opération nombre / base. On peut comme ça l'utiliser comme limite de la boucle.
    nombre = Math.floor(nombre / base);
  } while (nombre != 0);
  //On lance la fonction affichage.
  affichage(tableau_nombre);
};

//Fonction qui nous permet de récupérer les valeurs dans le formulaire de saisie et qui vérifie que tout est bien saisie correctement. On lance la conversion si tout les test sont ok.
const recupValeur = () => {
  nombreEntre = document.getElementById("nombre").value;
  base = document.getElementById("base").value;
  //On vérifie que tout est bien remplis.
  if (nombreEntre != "" && base != "") {
    let regex = /^[0-9]+$/;
    //On vérifie ici que ce sont bien des nombres qui sont rentrés.
    if (nombreEntre.match(regex) && base.match(regex)) {
      //On vérifie que la base est différente de 0...
      if (base != 0) {
        //On lance la conversion.
        conversion(nombreEntre, base);
      } else {
        //Ici il s'agit des messages d'alertes si les conditions ne sont pas bonnes.
        alert(`La base doit être différente de 0 !`);
      }
    } else {
      alert(`Le nombre de départ et la base doivent être des nombres.`);
    }
  } else {
    alert(`Le nombre de départ et la base doivent être renseignés.`);
  }
};
