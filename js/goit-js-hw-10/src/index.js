import './css/styles.css';
import cards from './utils/menu.json';
import menuCardItem from './templates/menu-item.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  switch: document.querySelector('.switch__input'),
};

buildMenu(cards);

function buildMenu(cards) {
  const markup = cards.map((card) => menuCardItem(card)).join('');
  console.log(markup);
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

refs.switch.addEventListener('change', changeTheme);

// Loading Theme from localStorage

let currentTheme = localStorage.getItem('theme');

function loadStoredTheme() {
  if (currentTheme) {
    refs.body.classList.add(currentTheme);
  }

  if (currentTheme === Theme.DARK) {
    refs.switch.setAttribute('checked', true);
  }
}

loadStoredTheme();

// Switching Theme

function changeTheme() {
  if (currentTheme === Theme.LIGHT || currentTheme === undefined) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    currentTheme = Theme.DARK;
    refs.switch.setAttribute('checked', true);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    currentTheme = Theme.LIGHT;
    refs.switch.setAttribute('checked', false);
  }
}
