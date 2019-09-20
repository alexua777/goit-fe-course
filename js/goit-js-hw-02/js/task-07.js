const LENGTHERROR = 'Error, login shall be 4 - 16 charecters long';
const LOGINERROR = 'Sorry, such login is already taken';
const SUCCESS = 'Success, Login has been added';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) == false) {
    console.log(LENGTHERROR);
  }
  if (isLoginUnique(logins, login)) {
    console.log(LOGINERROR);
  }
  if (isLoginValid(login) && !isLoginUnique(logins, login)) {
    logins.push(login);
    console.log(SUCCESS);
  }
};

addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');
console.log(logins);
