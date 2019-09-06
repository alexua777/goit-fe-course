const applePrice = '0.4$ / kg';
const appleQuntity = '1.4kg';
const orangePrice = '1.3$ / kg';
const orangeQuntity = '1.2kg';


const applePriceNum = Number.parseFloat(applePrice);
const orangePriceNum = Number.parseFloat(orangePrice);
const appleQuntityNum = Number.parseFloat(appleQuntity);
const orangeQuntityNum = Number.parseFloat(orangeQuntity);

const totalPrice = applePriceNum + orangePriceNum;

const totalWeight = appleQuntityNum + orangeQuntityNum;


console.assert(totalWeight === 2.6, 'Error: total weight is not accurate');
console.log(totalWeight);
console.assert(totalPrice === 1.7, 'Error: total price is not accurate');
console.log(totalPrice);

const totalWeightAccurate = (appleQuntityNum * 10 + orangeQuntityNum * 10) / 10;
console.assert(totalWeightAccurate === 2.6, 'Error: total weight is not accurate');
console.log(`Total Weight: ${totalWeightAccurate} kg`);

const totalPriceAccurate = (applePriceNum * 10 + orangePriceNum * 10) / 10;
console.assert(totalPriceAccurate === 1.7, 'Error: total weight is not accurate');
console.log(`Total Price: ${totalPriceAccurate}$`);
