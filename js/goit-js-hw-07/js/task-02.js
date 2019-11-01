const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const itemList = ingredients.map((item) => {
  const itemText = document.createElement('li');
  itemText.textContent = item;
  return itemText;

});

const list = document.querySelector('#ingredients');

list.append(...itemList);
