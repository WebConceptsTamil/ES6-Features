// Default values
// set default values for function parameters or array/object destructuring

function addNumbers(a, b = 20) {
  console.log(a);
  console.log(b);
}

addNumbers(10, 30)

const numbers = [1, 2, 3, 100]
const [a, b, c, d = 33] = numbers
console.log(d);

const person = {name: "Tom", age: 25, hobby: "playing video games"}
const {name, age, hobby = "paint"} = person
console.log(hobby);
