const total = 100;
const ordered = prompt('How many peices you would like to order?');

const orderedNumm = parseInt(ordered);

if (orderedNumm <= total && ordered !== null && orderedNumm > 0) {
  alert('Thank you for your order. Our agent will contact you soon');
}
if (orderedNumm < 0 || orderedNumm === 0) {
  alert('You entered incorrect number');
} else {
  alert('The requested amount is higher than stock');
}
console.log(orderedNumm);
