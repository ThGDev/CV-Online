// ACTION SUR BOUTON TOGGLE
// PASSAGE DARK-LIGHT MODE

const btn = document.querySelector("#toggle");  // on sélectionne l'élément avec l'ID "toggle"
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Je pense comprendre que matchMedia découpe la chaine de caractère en "mots"

const currentTheme = localStorage.getItem("theme"); // on stocke la chaine "theme" dans la variable currentTheme
if (currentTheme == "dark") { // si c'est "dark"
  document.body.classList.toggle("dark-theme"); // alors on switch sur le thème dark
} else if (currentTheme == "light") { // si c'est "light"
  document.body.classList.toggle("light-theme"); // alors on switch sur le thème light
}

btn.addEventListener("click", function () { // quand "#toggle" est cliqué
  if (prefersDarkScheme.matches) {  // si le thème choisi est "dark"
    document.body.classList.toggle("light-theme");  // alors on switch sur le light
    var theme = document.body.classList.contains("light-theme") // et on applique les éléments de classe définis à partir de la ligne 51 de ma feuille de style
      ? "light"
      : "dark";
  } else {  // sinon
    document.body.classList.toggle("dark-theme"); // on switch sur le dark
    var theme = document.body.classList.contains("dark-theme") // et on applique les éléments de classe définis à partir de la ligne 23 de ma feuille de style
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme); // et on applique le thème choisi jusqu'au prochain changement
});

// CHANGEMENT DE CLASSE DES BOUTONS DU MENU
// AU CLIC
// source : https://www.w3schools.com/howto/howto_js_active_element.asp

// je stocke dans une variable le conteneur de mes "liens" de menu → ligne 27 index.html
var btnContainer = document.querySelector("#liens-menu");

// je stocke dans une variable tous les éléments que je vais vouloir changer dans mon conteneur
// → lignes 29, 32, 35 et 38 index.html
var btns = btnContainer.getElementsByClassName("fas");

// je créé une boucle qui va parcourir tous les éléments de classe "fas" de mon conteneur et ajoute la classe "vert" à l'élément cliqué tout en retirant la classe "vert" aux autres → ligne 45 ci-dessous
for (var i = 0; i < btns.length; i++) { // pour la variable "i", tant que la valeur de "i" est strictement inférieure à la valeur du nombre d'éléments trouvés dans mon conteneur, alors j'incrémente "i" de 1
  btns[i].addEventListener("click", function() {  // lorsque du clic sur l'élément
    var current = document.getElementsByClassName("vert");  // je stocke dans une variable s'il a la classe "vert"
    current[0].className = current[0].className.replace(" vert", ""); // puis je parcours tous les éléments du conteneur (sous forme de liste []) et je remplace la classe ("vert" ou vide "", selon ce qui est trouvé)
    this.className += " vert"; // et j'applique la classe "verte" à l'élément cliqué
  });
}