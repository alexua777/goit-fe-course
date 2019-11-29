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
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

refs.switch.addEventListener('change', changeTheme);

// Loading Theme from localStorage
const defaultTheme = Theme.LIGHT;
let currentTheme;

function loadStoredTheme() {
  currentTheme = localStorage.getItem('theme');
  if (currentTheme && currentTheme !== defaultTheme) {
    refs.body.classList.add(currentTheme);
    refs.switch.setAttribute('checked', true);
  }
}

loadStoredTheme();

// Switching Theme

function changeTheme() {
  if (currentTheme === Theme.LIGHT || currentTheme === null) {
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
