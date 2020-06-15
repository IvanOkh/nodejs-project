const person = {
  name: "Ivan",
  age: 30,
  greet() {
    console.log("Hi! I am " + this.name);
  },
};

person.greet();
