const person = {
  name: "Ivan",
  age: 30,
  greet() {
    console.log("Hi! I am " + this.name);
  },
};

// person.greet();
const hobbies = ["Sports", "Cooking"];
for (let hobby of hobbies) {
  console.log(hobby);
}

//map touches every element in the array and modifies them
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);

hobbies.push("Programming");
console.log(hobbies);

//slice creates a copy
const copiedArray = hobbies.slice();
console.log(copiedArray);

//spread operator spreads data from within other array into the new one
const copiedArray2 = [...hobbies];
console.log(copiedArray2);
//same applies for the objects
const copiedPerson = { ...person };
console.log(copiedPerson);

//rest operator
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4));

//the other properties will be dropped from incoming object, all but name attribute
const printName = ({ name }) => {
  console.log(name);
};
printName(person);

const { name, age } = person;
console.log(name, age);

const morehobbies = ["Sports", "Swimming"];
const [hobby1, hobby2] = morehobbies;
console.log(hobby1, hobby2);
