const countProps = function (userObject) {
  let counter = 0;
  const countObg = Object.keys(userObject);
  for (const count of countObg) {
    counter += 1;
  }
  return counter;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


