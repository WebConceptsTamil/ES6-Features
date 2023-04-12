// function with single line and no params
function helloWorld() {
  console.log("HELLO WORLD"); //HELLO WORLD
}
helloWorld();

// function with multi line and no params
function greeting() {
  const user = "John";
  console.log(`welcome back ${user}`);
}
greeting();

// using return - single line
const multiplyNumber = function () {
  return 15 * 15;
};
const res = multiplyNumber();
console.log(res);

// using return with multi line
const addNumbers = function () {
  const a = 10;
  const b = 10;
  const sum = a + b;
  return sum;
};
const result = addNumbers();
console.log(result);

// one params
function greetUser(username) {
  console.log(`Hello ${username}`); //Hello John Doe
}
greetUser("John Doe");

// more than one params
function sortNumbers(even, odd) {
  let result = even.concat(odd);
  result.sort(function (a, b) {
    return a - b;
  });
  console.log(result); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return result;
}

sortNumbers([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]);

// usage of this keyword
const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHello(); // Output: Hello, my name is John
person.sayHelloArrow(); // Output: Hello, my name is undefined
