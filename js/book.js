function menuPop() {
  let menu = document.getElementById("menu-popUp");
  menu.style.display = "grid";
}

document.getElementById("closeMenu").addEventListener("click", function () {
  let menu = document.getElementById("menu-popUp");
  menu.style.display = "none";
});

function openInfo() {
  window.location.href = "info.html";
}
let horaS = document.getElementById("hora");

var currentTime = new Date();
console.log(currentTime);
hora.innerHTML = currentTime.getHours() + ":" + currentTime.getMinutes();
