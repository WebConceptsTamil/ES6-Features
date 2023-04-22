// Array Destructure - Extracting values from Array and assign them to a variable

let userData = ["Tom", 25, "tom@gmail.com", "football", "painting"];

// const username = userData[0]
// const age = userData[1]
// const email = userData[2]
// const fav = userData[3]
// const hobby = userData[4]

const [username, , , fav, hobby] = userData;

// console.log(username);
// console.log(age);
// console.log(email);
// console.log(fav);
// console.log(hobby);

// spread opertor
const [personName, ...personInfo] = userData;
console.log(personName);
console.log(personInfo);

const a = [1, 2, 3, 4, 5];
const b = [10, 20, 34];
const c = [...a, ...b]; //[1,2,3,4,5,10, 20, 34]
console.log(c);
