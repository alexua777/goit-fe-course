const CANCEL = 'Canceled by user';
const SUCCESS = 'Success! Welcome!';
const DENIED = 'Wrong password';
let message = '';

const MYPASSWORD = 'Temp123%';

const userPassword = prompt('Please enter your password');

if (userPassword === MYPASSWORD) {
  message = SUCCESS;
  console.assert(userPassword === MYPASSWORD && message === SUCCESS, 'Error with entering correct password');

}

if (userPassword === null) {
  message = CANCEL;
  console.assert(userPassword === null && message === CANCEL, 'Error with cancelling');
}

if (userPassword !== MYPASSWORD && userPassword !== null) {
  message = DENIED;
  console.assert((userPassword !== MYPASSWORD && userPassword !== null) && message === DENIED, 'Error with entering wrong password');

}

alert(message);
