// Arrow Fuctions
// function with single line and no params
let helloWorld = () => console.log("HELLO WORLD");
helloWorld();

// function with multi line and no params
const greeting = () => {
  const user = "John";
  console.log(`welcome back ${user}`);
};
greeting();

// using return - single line
const multiplyNumber = () => 15 * 15;
const res = multiplyNumber();
console.log(res);

// using return with multi line
const addNumbers = () => {
  const a = 10;
  const b = 20;
  const sum = a + b;
  return sum;
};
const result = addNumbers();
console.log(result);

// one params
const greetUser = (username) => console.log(`Welcome ${username}`);
greetUser("Vimal");

// more than one params
const sortArr = (even, odd) => {
  let result = even.concat(odd);
  result.sort(function (a, b) {
    return a - b;
  });
  console.log(result); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return result;
};
sortArr([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]);

// usage of this keyword
const person = {
  user: "John",
  sayHelloArrow: () => {
    console.log(`Hello, my name is ${this.user}`);
  },
};
person.sayHelloArrow();
