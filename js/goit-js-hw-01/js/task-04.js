/* eslint-disable no-alert */
let credits = 23580;
const pricePerDroid = 3000;
let purchasedDroids = 0;
let droidsNum;
let totalPrice;

const CANCEL = 'Cancled by the user!';
const OVER_LIMIT = 'Not enough funds on the account!';
let message = '';

while (credits > 0) {
  purchasedDroids = prompt('How many droids would you like to purchase?', '1');
  droidsNum = parseInt(purchasedDroids);

  totalPrice = droidsNum * pricePerDroid;

  if (purchasedDroids == null) {
    console.log(CANCEL);
    break;
  }

  if (droidsNum < 0 || droidsNum === 0) {
    console.log('Incorrect entered ammount');
    break;
  }

  if (totalPrice > credits) {
    console.log(OVER_LIMIT);
    break;
  }



  credits -= totalPrice;
  message = `You have purchased ${droidsNum}, your current balance is ${credits}`;
  alert(message);
}
