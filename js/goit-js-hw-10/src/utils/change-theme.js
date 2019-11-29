export default function changeTheme;
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  function changeTheme() {

    //   refs.body.classList.add('dark-theme');
    console.log('checked');
  }
  
  refs.input.addEventListener('change', changeTheme());