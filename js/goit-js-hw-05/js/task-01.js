

const Account = function (login, name) {
  this.login = login;
  this.name = name;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Name: ${this.name}`);


};


console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof


const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com
