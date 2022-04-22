let msj = "hola perro";
console.log(msj);

//togle buton dark
function tema() {
  let tema = document.getElementById("togle-theme");
  if (tema.value == "s") {
    console.log("activao");
    tema.value = "n";
    let fondo = document.getElementById("fondo");
    fondo.setAttribute(
      "src",
      "https://i.pinimg.com/originals/b5/fd/3f/b5fd3fbe984103e08b9482471484394b.gif"
    );
    fondo.style.filter = "brightness(0.5)";
    let lenguajes = document.getElementById("lgnj");
    lenguajes.style.display = "none";
  } else {
    console.log("descativao");
    tema.value = "s";
    let fondo = document.getElementById("fondo");
    fondo.setAttribute(
      "src",
      "img/background.jpg"
    );
    fondo.style.filter = "brightness(0.7)";
    let lenguajes = document.getElementById("lgnj");
    lenguajes.style.display = "grid";
  }
}
function menuPop() {
  let menu = document.getElementById("menu-popUp");
  menu.style.display = "grid";
}

document.getElementById("closeMenu").addEventListener("click", function () {
  let menu = document.getElementById("menu-popUp");
  menu.style.display = "none";
});

function screen(x) {
  if (x.matches) {
    // If media query matches
    let fondo = document.getElementById("fondo");
    fondo.setAttribute(
      "src",
      "https://cdn.dribbble.com/users/267530/screenshots/3155908/circles-3-1.gif"
    );
    fondo.style.filter = "brightness(0.5)";
  } else {
    let fondo = document.getElementById("fondo");
    fondo.setAttribute(
      "src",
      "img/background.jpg"
    );
    fondo.style.filter = "brightness(0.7)";
  }
}

var x = window.matchMedia("(max-width: 600px)");
screen(x); // Call listener function at run time

function fiver() {
  window.location.href =
    "https://es.fiverr.com/omarguerrero740?up_rollout=true";
}
