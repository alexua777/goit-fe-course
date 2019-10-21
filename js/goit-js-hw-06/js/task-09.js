import users from './users.js';

const getNamesSortedByFriendsCount = (users) => users
  .sort((minFriends, maxFriends) => minFriends.friends.length - maxFriends.friends.length)
  .map((user) => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
