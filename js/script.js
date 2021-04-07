const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuNav = document.querySelector('.nav');
const btnShort = document.querySelector('.btn-short');
const error = document.querySelector('.error');
const input = document.getElementById('input');

const hide = document.querySelector('.hide');
const linkAntigo = document.querySelector('.url');
const short_url = document.querySelector('.short-url');
const btnCopy = document.querySelector('.btn-url');
function menuMobile() {
  menuHamburguer.addEventListener('click', function (e) {
    e.preventDefault();
    menuNav.classList.toggle('nav-mobile');
  });
}

function shortLink() {
  btnShort.addEventListener('click', function (e) {
    if (input.value == '') {
      error.style.visibility = 'initial';
    } else {
      error.style.visibility = 'hidden';
      const url = `https://api.shrtco.de/v2/shorten?url=${input.value}`;
      fetch(url)
        .then((response) => response.json())
        .then((link) => {
          hide.style.display = 'block';
          linkAntigo.innerText = input.value;
          short_url.innerText = link.result.short_link;
        });
    }
  });
}

menuMobile();
shortLink();
