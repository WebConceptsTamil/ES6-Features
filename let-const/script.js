// scope - accessibility/visibility of variables
// 3 types -Global   -Function   -Block

// point 1 - part of window object
const greet = "hello world"
console.log(greet);

// point 2 - create same name variables in a particular scope
const username = "John Doe"
// const username = "Tom"
console.log(username);

//point 3 - using before the declaration
const ab = "123"
console.log(ab);

// point 4 - function and block
function greetMessage() {
    const user = "Tom";
    // user = "John";
    if (true) {
      const greet = "Hello world";
      for (let i = 0; i < 6; i++) {
        console.log(i);
        console.log(i);
      }
      console.log(greet);
    }
    console.log(user);
  }
  
  greetMessage()

// point 5 - let and const 
let a = "123";
a = "1234"
console.log(a);

//point 5 -  Arrays and Objects
const users = ["john", "tom"];
users.pop();
console.log(users);

const usersObj = {};
usersObj.name = "Max";
usersObj.age = 20;
console.log(usersObj);

