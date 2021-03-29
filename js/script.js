const menuHamburguer = document.querySelector(".menu-hamburguer");
const menuNav = document.querySelector(".nav");
const btnShort = document.querySelector(".btn-short");
const error = document.querySelector(".error");
const input = document.getElementById("input");

function menuMobile() {
  menuHamburguer.addEventListener("click", function (e) {
    e.preventDefault();
    menuNav.classList.toggle("nav-mobile");
  });
}

function shortLink() {
  btnShort.addEventListener("click", function (e) {
    if (input.value == "") {
      error.style.visibility = "initial";
    } else {
        error.style.visibility = "hidden";
    }
  });
}

menuMobile();
shortLink();
