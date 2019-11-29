import './css/styles.css';
import cards from './utils/menu.json';
import menuCardItem from './templates/menu-item.hbs';


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



const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let currentTheme = Theme.LIGHT;
function changeTheme() {

  if (currentTheme === Theme.LIGHT) {

    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    currentTheme = Theme.DARK;


  } else {

    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    currentTheme = Theme.LIGHT;
  }


}

//   } else {
//     refs.body.classList.replace(Theme.LIGHT, Theme.DARK);

//     currentTheme = Theme.DARK;
//   }




//   } else {
//     refs.body.classList.remove(Theme.DARK);
//     refs.body.classList.add(Theme.LIGHT);
//     currentTheme = Theme.LIGHT;
//     console.log(currentTheme);
//     console.log('dark');
//   }





