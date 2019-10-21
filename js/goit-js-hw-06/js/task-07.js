import users from './users.js';

const calculateTotalBalance = (users) => users.reduce((total, value) => total + value.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
