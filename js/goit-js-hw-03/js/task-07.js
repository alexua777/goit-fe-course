const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let id = 1;

const account = {
  balance: 0,

  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.addTransaction({ id, type: Transaction.DEPOSIT, amount });
  },

  withdraw(amount) {
    if (this.balance < amount) {
      return console.log('Not enough funds on your balance');
    }
    this.balance -= amount;
    this.addTransaction({ id, type: Transaction.WITHDRAW, amount });
  },

  addTransaction(transaction) {
    this.transactions.push(transaction);
    id += 1;
  },

  getBalance() {
    return console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let index = 0; index < this.transactions.length; index++) {
      if (this.transactions[index].id == id) {
        return this.transactions[index];
      }
      return 'There is no such ID in our Data Base';
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let index = 0; index < this.transactions.length; index++) {
      if (this.transactions[index].type == type) {
        total += this.transactions[index].amount;
      }
    }
    return total;
  },
};

account.deposit(500);
account.deposit(100);
account.withdraw(150);
account.getBalance();
console.table(account.transactions);
console.log(account.getTransactionDetails(8));
console.log(account.getTransactionTotal('withdraw'));
// console.log(account.balance);
