function menuPop() {
  let menu = document.getElementById("menu-popUp");
  menu.style.display = "grid";
  
}

document.getElementById("closeMenu").addEventListener("click", function () {
  let menu = document.getElementById("menu-popUp");
  menu.style.display = "none";
});

function portada() {
  window.location.href = "info.html";
}

// obeteniendo la ciudad y ubicacion actual de la persona
//API metaweather
const API_url = "https://www.metaweather.com/api/location/search/?lattlong=";

const xhr = new XMLHttpRequest();

navigator.geolocation.getCurrentPosition(function (position) {
  let latitud = position.coords.latitude;
  let longitud = position.coords.longitude;
  console.log("latitud : " + latitud, "longitud : " + longitud);

  function rqHandler(u) {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.response);
      let ciudad = data[0].title;
      let woeid = data[0].woeid;
      console.log(ciudad + " id : " + woeid + "\n", data);
      document.getElementById("city").innerHTML = ciudad;
      const fecha = new Date("Jul 12 2011");
      console.log(fecha);
      //pais
    }
  }
  //en caso de error: https://cors-anywhere.herokuapp.com/
  xhr.addEventListener("load", rqHandler);
  xhr.open(
    "GET",
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`
  );
  xhr.send();
});

let horaS = document.getElementById("hora");

var currentTime = new Date();
console.log(currentTime);
hora.innerHTML = currentTime.getHours() + ":" + currentTime.getMinutes();

/*
var displayHours = document.getElementById('displayHours');
      var displayMinutes = document.getElementById('displayMinutes');
      var displaySeconds = document.getElementById('displaySeconds');

      displayHours.innerHTML = currentTime.getHours() + " hrs";
      displayMinutes.innerHTML = currentTime.getMinutes() + " min";
      displaySeconds.innerHTML = currentTime.getSeconds() + " sec";
      */
/**
 *  var IP = "74.125.224.72";
      async function getIpClient() {
        try {
          const response = await axios.get('https://api.ipify.org?format=json');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
      
      getIpClient();
      

      // La api de cors-anywhere espera como argument la URL de destino
      var CorsAnyWhereUrl = "https://cors-anywhere.herokuapp.com/";

      // La URL de geoplugin que espera la IP de usuario
      var GeoPluginUrl = "http://www.geoplugin.net/json.gp?ip=";

      // o hacer llamada a geoplugin usando javascript plano
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.response);
          // console.log("Hola visitante de ",response);
          console.log("Hola visitante de " + response.geoplugin_countryName);
        }
      };
      xhttp.open(
        "GET",
        `https://cors-anywhere.herokuapp.com/${GeoPluginUrl}74.125.224.72`
      );
      xhttp.send();
 */
