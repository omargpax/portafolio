let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function() {

    let dezplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= dezplazamientoActual) {
        if (dezplazamientoActual <= 80) {
            document.getElementsByTagName("nav")[0].style.boxShadow = "none";
            document.getElementsByTagName("nav")[0].style.top = "0px";
            document.getElementsByTagName("nav")[0].style.background = "transparent";
        } else if (dezplazamientoActual <= 200) {
            document.getElementsByTagName("nav")[0].style.boxShadow = "0px 10px 16px 0px rgba(0, 0, 0, 0.1)";
            document.getElementsByTagName("nav")[0].style.background = "white";
            document.getElementsByTagName("nav")[0].style.top = "0px";
        } else if (dezplazamientoActual >= 200) {
            document.getElementsByTagName("nav")[0].style.top = "0px";
            document.getElementsByTagName("nav")[0].style.background = "white";
            document.getElementsByTagName("nav")[0].style.boxShadow = "0px 10px 10px 0px rgba(0, 0, 0, 0.1)";
        }

    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    console.log(ubicacionPrincipal+" - "+dezplazamientoActual)
    ubicacionPrincipal = dezplazamientoActual;
});