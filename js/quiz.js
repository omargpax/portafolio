function menuPop() {
  let menu = document.getElementById("menu-popUp");
  menu.style.display = "grid";
}

function bkhome() {
  window.location.href = "index.html";
}

document.getElementById("closeMenu").addEventListener("click", function () {
  let menu = document.getElementById("menu-popUp");
  menu.style.display = "none";
});

//logica del juego
let quizCultura = {
  pregunta: 0,
  wins: 0,
  incorrectas: 0,
};
//comprobando que exista
if (localStorage.getItem("quizCultura") == null) {
  localStorage.setItem("quizCultura", JSON.stringify(quizCultura));
} else {
  console.log("play >");
  localStorage.setItem("quizCultura", JSON.stringify(quizCultura));
  const respuestas = document.querySelector("#respuesta-usu");
  (() => {
    respuestas.addEventListener("click", delegacion);
  })();
}

function delegacion(e) {
  e.preventDefault();
  //console.log(e.target.classList[0]);
  let dataGame = JSON.parse(localStorage.getItem("quizCultura"));
  switch (dataGame.pregunta) {
    case 0:
      pregunta0(e);
      break;
    case 1:
      pregunta1(e);
      break;
    case 2:
      pregunta2(e);
      break;
    case 3:
      pregunta3(e);
      break;
    case 4:
      pregunta4(e);
      break;
    case 5:
      pregunta5(e);
      break;
    case 6:
      pregunta6(e);
      break;
    case 7:
      pregunta7(e);
      break;
    case 8:
      pregunta8(e);
      break;
    case 9:
      pregunta9(e);
      break;
    case 10:
      pregunta10(e);
      break;
    case 11:
      pregunta11(e);
      break;
    case 12:
      pregunta12(e);
      break;
    case 13:
      pregunta13(e);
      break;
    case 14:
      pregunta14(e);
      break;
  }
}

function pregunta0(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A": //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}

function pregunta1(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}

function pregunta2(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}

function pregunta3(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles

      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}

function pregunta4(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta5(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      //--
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta6(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles

      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta7(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta8(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta9(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("B")[0].style.background = "green";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta10(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      //--
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("C")[0].style.background = "green";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta11(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles

      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta12(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("D")[0].style.background = "green";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta13(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles

      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "#b13c3c";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      document.getElementsByClassName("A")[0].style.background = "green";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
function pregunta14(e) {
  let respuestaUsuario = e.target.classList[0];
  switch (respuestaUsuario) {
    case "A":
      console.log("a"); //styles
      document.getElementsByClassName("A")[0].style.background = "#b13c3c";
      document.getElementsByClassName("A")[0].style.border = "none";
      document.getElementsByClassName("A")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "B":
      console.log("b");
      document.getElementsByClassName("B")[0].style.background = "#b13c3c";
      document.getElementsByClassName("B")[0].style.border = "none";
      document.getElementsByClassName("B")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //---LOCKS
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "C":
      console.log("c");
      document.getElementsByClassName("C")[0].style.background = "#b13c3c";
      document.getElementsByClassName("C")[0].style.border = "none";
      document.getElementsByClassName("C")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "D":
      console.log("d");
      document.getElementsByClassName("D")[0].style.background = "#b13c3c";
      document.getElementsByClassName("D")[0].style.border = "none";
      document.getElementsByClassName("D")[0].style.color = "white";
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //----
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.incorrectas += 1;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
    case "E":
      console.log("e");
      document.getElementsByClassName("E")[0].style.background = "green";
      document.getElementsByClassName("E")[0].style.border = "none";
      document.getElementsByClassName("E")[0].style.color = "white";
      //---
      document.getElementsByClassName("A")[0].setAttribute("disabled", true);
      document.getElementsByClassName("B")[0].setAttribute("disabled", true);
      document.getElementsByClassName("C")[0].setAttribute("disabled", true);
      document.getElementsByClassName("D")[0].setAttribute("disabled", true);
      document.getElementsByClassName("E")[0].setAttribute("disabled", true);
      document.getElementById("nextBtn").style.background = "orange";
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      quiz.pregunta += 1;
      quiz.wins += 1;
      document.getElementById("numWin").innerHTML = quiz.wins;
      localStorage.setItem("quizCultura", JSON.stringify(quiz));
      break;
  }
}
document.getElementById("nextBtn").addEventListener("click", function (e) {
  e.preventDefault();
  //styles
  document.getElementById(
    "respuesta-usu"
  ).innerHTML = `<button class="A"> <b>A </b> New York </button>
  <button class="B"> <b>B </b> Washington DC </button>
  <button class="C"> <b>C </b> Florida</button>
  <button class="D"> <b>D </b> California </button>
  <button class="E"> <b>E </b> Orlando </button>`;
  //enabled
  document.getElementsByClassName("A")[0].removeAttribute("disabled");
  document.getElementsByClassName("B")[0].removeAttribute("disabled");
  document.getElementsByClassName("C")[0].removeAttribute("disabled");
  document.getElementsByClassName("D")[0].removeAttribute("disabled");
  document.getElementsByClassName("E")[0].removeAttribute("disabled");

  let dataGame = JSON.parse(localStorage.getItem("quizCultura"));
  switch (dataGame.pregunta) {
    case 0:
      document.getElementById("preguntaDoc").innerHTML =
        "Capital de Estados Unidos.";
      document.getElementsByClassName("A")[0].innerHTML = "<b>A </b> New York";
      document.getElementsByClassName("B")[0].innerHTML =
        "<b>B </b> Washington DC";
      document.getElementsByClassName("C")[0].innerHTML = "<b>C </b> Florida";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> California";
      document.getElementsByClassName("E")[0].innerHTML = "<b>E </b> Orlando";
      break;
    case 1:
      document.getElementById("preguntaDoc").innerHTML =
        "Septima maravilla del mundo.";
      document.getElementsByClassName("A")[0].innerHTML =
        "<b>A </b> Coliseo Romano";
      document.getElementsByClassName("B")[0].innerHTML = "<b>B </b> Taj Mahal";
      document.getElementsByClassName("C")[0].innerHTML =
        "<b>C </b> Machu Picchu";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> La Gran Muralla China";
      document.getElementsByClassName("E")[0].innerHTML =
        "<b>E </b> Cristo Redentor";
      break;
    case 2:
      document.getElementById("preguntaDoc").innerHTML =
        "Altura y nombre del edificio más grande del mundo";
      document.getElementsByClassName("A")[0].innerHTML =
        "<b>A </b> Torre de Shangái, 632m";
      document.getElementsByClassName("B")[0].innerHTML =
        "<b>B </b> Torres gemelas,250m";
      document.getElementsByClassName("C")[0].innerHTML =
        "<b>C </b> Burj Khalifa, 868m";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> Burj Khalifa, 828m";
      document.getElementsByClassName("E")[0].innerHTML =
        "<b>E </b> Plaza vea, 58m";
      break;
    case 3:
      document.getElementById("preguntaDoc").innerHTML =
        "Cída del muro de Berlín";
      document.getElementsByClassName("A")[0].innerHTML = "<b>A </b> 1989";
      document.getElementsByClassName("B")[0].innerHTML = "<b>B </b> 1956";
      document.getElementsByClassName("C")[0].innerHTML = "<b>C </b> 1985";
      document.getElementsByClassName("D")[0].innerHTML = "<b>D </b> 1940";
      document.getElementsByClassName("E")[0].innerHTML = "<b>E </b> 1915";
      break;
    case 4:
      document.getElementById("preguntaDoc").innerHTML =
        "Segunda Guerra Mundial";
      document.getElementsByClassName("A")[0].innerHTML =
        "<b>A </b> De 1984 a 1985";
      document.getElementsByClassName("B")[0].innerHTML = "<b>B </b> No hubo";
      document.getElementsByClassName("C")[0].innerHTML =
        "<b>C </b> De 1935 a 1940";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> De 1940 a 1945";
      document.getElementsByClassName("E")[0].innerHTML =
        "<b>E </b> De 1939 a 1945";
      break;
    case 5:
      document.getElementById("preguntaDoc").innerHTML =
        "Himno de la Unión Europea.";
      document.getElementsByClassName("A")[0].innerHTML =
        "<b>A </b> La Marsellesa";
      document.getElementsByClassName("B")[0].innerHTML =
        "<b>B </b> Cha Cha Cha";
      document.getElementsByClassName("C")[0].innerHTML =
        "<b>C </b> Oda a la Alegría";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> Marcha Real";
      document.getElementsByClassName("E")[0].innerHTML =
        "<b>E </b> Lijepa naša domovino";
      break;
    case 6:
      document.getElementById("preguntaDoc").innerHTML =
        "Oceano más grande del mundo.";
      document.getElementsByClassName("A")[0].innerHTML =
        "<b>A </b> Océano Pacífico";
      document.getElementsByClassName("B")[0].innerHTML =
        "<b>B </b> Océano Atlantico";
      document.getElementsByClassName("C")[0].innerHTML =
        "<b>C </b> Océano Indico";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> Océano Antártico";
      document.getElementsByClassName("E")[0].innerHTML =
        "<b>E </b> No se sabe";
      break;
    case 7:
      document.getElementById("preguntaDoc").innerHTML =
        "Llegada de Cristobal Colón a America";
      document.getElementsByClassName("A")[0].innerHTML =
        "<b>A </b> El 12 de Septiembre de 1492";
      document.getElementsByClassName("B")[0].innerHTML =
        "<b>B </b> El 10 Nomviembre de 1498";
      document.getElementsByClassName("C")[0].innerHTML =
        "<b>C </b> El 14 de Mayo de 1494";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> El 12 de octubre de 1492";
      document.getElementsByClassName("E")[0].innerHTML =
        "<b>E </b> El 22 de Agosto de 1482";
      break;
    case 8:
      document.getElementById("preguntaDoc").innerHTML =
        "Número de Huesos en el cuerpo humano.";
      document.getElementsByClassName("A")[0].innerHTML = "<b>A </b> 230";
      document.getElementsByClassName("B")[0].innerHTML = "<b>B </b> 205";
      document.getElementsByClassName("C")[0].innerHTML = "<b>C </b> 203";
      document.getElementsByClassName("D")[0].innerHTML = "<b>D </b> 198";
      document.getElementsByClassName("E")[0].innerHTML = "<b>E </b> 206";
      break;
    case 9:
      document.getElementById("preguntaDoc").innerHTML =
        "Mamiferos que pueden volar.";
      document.getElementsByClassName("A")[0].innerHTML = "<b>A </b> Ardillas";
      document.getElementsByClassName("B")[0].innerHTML =
        "<b>B </b> Murcielagos";
      document.getElementsByClassName("C")[0].innerHTML = "<b>C </b> Cerdos";
      document.getElementsByClassName("D")[0].innerHTML = "<b>D </b> Zuricata";
      document.getElementsByClassName("E")[0].innerHTML = "<b>E </b> Mapache";
      break;
    case 10:
      document.getElementById("preguntaDoc").innerHTML =
        "Total de notas Musicales.";
      document.getElementsByClassName("A")[0].innerHTML = "<b>A </b> 6";
      document.getElementsByClassName("B")[0].innerHTML = "<b>B </b> 8";
      document.getElementsByClassName("C")[0].innerHTML = "<b>C </b> 12";
      document.getElementsByClassName("D")[0].innerHTML = "<b>D </b> 10";
      document.getElementsByClassName("E")[0].innerHTML =
        "<b>E </b> Grave y Agudo";
      break;
    case 11:
      document.getElementById("preguntaDoc").innerHTML = "Animal más rapido.";
      document.getElementsByClassName("A")[0].innerHTML =
        "<b>A </b> El halcón peregrino";
      document.getElementsByClassName("B")[0].innerHTML =
        "<b>B </b> El Guepardo";
      document.getElementsByClassName("C")[0].innerHTML =
        "<b>C </b> El leopardo";
      document.getElementsByClassName("D")[0].innerHTML = "<b>D </b> El lobo";
      document.getElementsByClassName("E")[0].innerHTML = "<b>E </b> yo";
      break;
    case 12:
      document.getElementById("preguntaDoc").innerHTML =
        "Mineral Más duro del planeta.";
      document.getElementsByClassName("A")[0].innerHTML = "<b>A </b> EL Oro";
      document.getElementsByClassName("B")[0].innerHTML = "<b>B </b> El Ruby";
      document.getElementsByClassName("C")[0].innerHTML = "<b>C </b> EL Cobre";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> El Diamante";
      document.getElementsByClassName("E")[0].innerHTML = "<b>E </b> EL arroz";
      break;
    case 13:
      document.getElementById("preguntaDoc").innerHTML =
        "Enfermedad que ocasionó la muerte de S. Hawking";
      document.getElementsByClassName("A")[0].innerHTML =
        "<b>A </b> Esclerosis Lateral Amiotrófica";
      document.getElementsByClassName("B")[0].innerHTML = "<b>B </b> Parkinson";
      document.getElementsByClassName("C")[0].innerHTML = "<b>C </b> Diabetes";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> miocardiopatía";
      document.getElementsByClassName("E")[0].innerHTML = "<b>E </b> Cáncer";
      break;
    case 14:
      document.getElementById("preguntaDoc").innerHTML =
        "Universidad Más antigua del mundo.";
      document.getElementsByClassName("A")[0].innerHTML =
        "<b>A </b> La Universidad De Cambridge";
      document.getElementsByClassName("B")[0].innerHTML =
        "<b>B </b> La Universidad Peruana Unión";
      document.getElementsByClassName("C")[0].innerHTML =
        "<b>C </b> La Universidad de Italia";
      document.getElementsByClassName("D")[0].innerHTML =
        "<b>D </b> La Universidad de Oxford";
      document.getElementsByClassName("E")[0].innerHTML =
        "<b>E </b> La Universidad de Bolonia";
      break;
    case 15:
      var quiz = JSON.parse(localStorage.getItem("quizCultura"));
      if (quiz.wins >= 7) {
        console.log('has ganado el quiz');
        document.getElementById("pop-win").style.display = "grid";
        document.getElementById('endGame').setAttribute('src','img/explocion.png');
        document.getElementById('numScore').innerHTML=quiz.wins;
      }else{
        console.log('has perdido el quiz');
        document.getElementById("pop-win").style.display = "grid";
        document.getElementById('endGame').setAttribute('src','img/lose-game.png');
        document.getElementById('numScore').innerHTML=quiz.wins;
      }
      break;
  }
});
