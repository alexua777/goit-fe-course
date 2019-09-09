const costChina = 100;
const costChili = 250;
const costAustralia = 170;
const costIndia = 80;
const costJamaica = 120;
let cost;

const userCountry = prompt('Please enter your country');
let userCountryTransformed = '';

for (let i = 1; i < userCountry.length; i += 1) {
  userCountryTransformed += userCountry[i].toLowerCase();
}
userCountryTransformed = userCountry[0].toUpperCase() + userCountryTransformed;

switch (userCountryTransformed) {
  case 'China':
    cost = costChina;
    alert(`Delivery cost to ${userCountryTransformed} will be ${cost}`);
    break;

  case 'Chili':
    cost = costChili;
    alert(`Delivery cost to ${userCountryTransformed} will be ${cost}`);
    break;

  case 'Australia':
    cost = costAustralia;
    alert(`Delivery cost to ${userCountryTransformed} will be ${cost}`);
    break;

  case 'India':
    cost = costIndia;
    alert(`Delivery cost to ${userCountryTransformed} will be ${cost}`);
    break;

  case 'Jamaica':
    cost = costJamaica;
    alert(`Delivery cost to ${userCountryTransformed} will be ${cost}`);
    break;

  default:
    alert('The delivery to your counrty is not available');
    break;
}
