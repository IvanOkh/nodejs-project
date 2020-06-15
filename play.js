const person = {
  name: "Ivan",
  age: 30,
  greet() {
    console.log("Hi! I am " + this.name);
  },
};

// person.greet();
const hobbies = ["sports", "cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);
