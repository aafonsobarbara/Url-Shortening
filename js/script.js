const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuNav = document.querySelector('.nav');
const btnShort = document.querySelector('.btn-short');
const error = document.querySelector('.error');
const input = document.getElementById('input');

const linkAntigo = document.querySelector('.old-url');
const shortenContent = document.querySelector('.shorten-content');
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
    } else if (input.value !== '') {
      error.style.visibility = 'hidden';
      const url = `https://api.shrtco.de/v2/shorten?url=${input.value}`;
      fetch(url)
        .then((response) => response.json())
        .then((link) => {
          const urls = document.createElement('div');
          urls.classList.add('urls');
          shortenContent.appendChild(urls);
          const short_url = link.result.short_link;
          urls.innerHTML = `
          <p class="old-url">${input.value}</p>
          <div class="box-urls">
            <p class="short-url">${short_url}</p>
            <button class="btn-copy" value="${short_url}">Copy</button>
          </div>
          `;

          let btn_copy = document.querySelectorAll('.btn-copy');
          btn_copy.forEach((btn) => {
            btn.addEventListener('click', async function copy() {
              const short_url = btn.value;
              await navigator.clipboard.writeText(short_url);
            });
          });
          localStorage.setItem(Math.floor(Math.random() * 100), urls.innerHTML);
        });
    }
  });
  for (var i = 0; i < localStorage.length; i++) {
    let saved = localStorage.getItem(localStorage.key(i));
    if (saved) {
      const urls = document.createElement('div');
      urls.classList.add('urls');
      urls.innerHTML = saved;
      // var parser = new DOMParser();
      // saved = parser.parseFromString(saved, 'text/html');
      shortenContent.appendChild(urls);
    }
  }
}

menuMobile();
shortLink();
