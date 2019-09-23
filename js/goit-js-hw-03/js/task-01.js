const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};


user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;

const userEntries = Object.keys(user);

for (const entry of userEntries) {
  console.log(`${entry }:${user[entry]}`);
}
