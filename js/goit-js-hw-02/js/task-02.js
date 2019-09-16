
const calculateEngravingPrice = function (message, pricePerWord) {
  let total = 0;
  const wordsCount = message.split(' ');
  total = wordsCount.length * pricePerWord;
  return total;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(calculateEngravingPrice(
  'Proin sociis natoque et magnis parturient montes mus',
  20,
),
);

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));
