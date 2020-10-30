// ACTION SUR BOUTON TOGGLE
// PASSAGE DARK-LIGHT MODE

const btn = document.querySelector("#toggle");  // on sélectionne l'élément avec l'ID "toggle"
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

// CHANGEMENT DE CLASSE DES BOUTONS DU MENU
// AU CLIC

// function changeClass() { 
//   var lien = document.getElementById("myDIV");
//   document.querySelector(IDelement).classList.toggle("vert"); 
// }
// const currentLocation = Location.href;
// const menuItems = document.querySelectorAll('.MenuLinks');
// const menuLength = menuItems.length;
// for(let i = 0; i<menuLength; i++){
//   if(menuItems[i].href === currentLocation){
//     menuItems[i].className = "vert";
//   }
// }
console.log(currentLocation);