import users from './users.js';

const getSortedUniqueSkills = (users) => users
  .reduce((acc, elem) => ([...acc, ...elem.skills]), [])
  .filter((elem, index, arr) => arr.indexOf(elem) === index)
  .sort((min, max) => min.localeCompare(max));

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
