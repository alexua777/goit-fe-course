const categories = document.querySelector('#categories');
const categoryCount = categories.children.length;
console.log('Total categories count in this list is', categoryCount);

const categoryText = [...categories.children]
  .map((i) => `${i.children[0].textContent } : ${i.children[1].children.length}`)
  .join('\n');
console.log(categoryText);


