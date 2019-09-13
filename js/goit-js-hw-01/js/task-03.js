const CANCEL = 'Canceled by user';
const SUCCESS = 'Success! Welcome!';
const DENIED = 'Wrong password';
let message = '';

const MYPASSWORD = 'Temp123%';

const userPassword = prompt('Please enter your password');

if (userPassword === MYPASSWORD) {
  message = SUCCESS;
}

if (userPassword === null) {
  message = CANCEL;
}

if (userPassword !== MYPASSWORD && userPassword !== null) {
  message = DENIED;
}

alert(message);
