class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers}`);
  }
}

const mangoTwo = new User('Mango', 2, 20);
mangoTwo.getInfo();

const polyTwo = new User('Poly', 3, 17);
polyTwo.getInfo();


