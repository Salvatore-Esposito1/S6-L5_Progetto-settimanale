// MODALITA' DARK
function funzione() {
    let modalitaNotte = document.body;
    modalitaNotte.classList.toggle("dark-mode");
 }


 // SCROLL TOP
let pulsante = document.querySelector("#myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    pulsante.style.display = "block";
  } else {
    pulsante.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}