// const applePrice = '0.4$ / kg';
// const appleQuntity = '1.4kg';
// const orangePrice = '1.3$ / kg';
// const orangeQuntity = '1.2kg';


// const applePriceNum = Number.parseFloat(applePrice);
// const orangePriceNum = Number.parseFloat(orangePrice);
// const appleQuntityNum = Number.parseFloat(appleQuntity);
// const orangeQuntityNum = Number.parseFloat(orangeQuntity);

// const totalPrice = applePriceNum + orangePriceNum;

// const totalWeight = appleQuntityNum + orangeQuntityNum;


// console.assert(totalWeight === 2.6, 'Error: total weight is not accurate');
// console.log(totalWeight);
// console.assert(totalPrice === 1.7, 'Error: total price is not accurate');
// console.log(totalPrice);

// const totalWeightAccurate = (appleQuntityNum * 10 + orangeQuntityNum * 10) / 10;
// console.assert(totalWeightAccurate === 2.6, 'Error: total weight is not accurate');
// console.log(`Total Weight: ${totalWeightAccurate} kg`);

// const totalPriceAccurate = (applePriceNum * 10 + orangePriceNum * 10) / 10;
// console.assert(totalPriceAccurate === 1.7, 'Error: total weight is not accurate');
// console.log(`Total Price: ${totalPriceAccurate}$`);

// const arr = ['yes', 'dsfsfsdf', 'fdsdfsd'];


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > threshold) {
//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
//   }
// }

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45


// const input = prompt();
// const testCap = input[0].toUpperCase() + input.slice(1).toLowerCase();
// console.log(testCap);

// const getSum = (a, b) => a * b;
// console.log(getSum(4, 5));

const longestWordFunc = function(string) {
    const words = string.split(' ');
    console.log(words);
    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        
    }
    return longestWord;
}

console.log(longestWordFunc('dsfkshfksdhfksdhfs fsdfsdfsdfsdfsdfsdfsdfsdfsdfsd dfsfsdfsdfsdfs sdfsdfsd'));
