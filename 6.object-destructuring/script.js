// Object Destructure - Extracting values from Object and assign them to a variable

let userData = {
  firstname: "Tom",
  age: 25,
  email: "tom@gmail.com",
  fav: "football",
};

// const username =  userData.firstname
// const age =  userData.age
// const email =  userData.email
// const fav =  userData.fav

const { firstname, age, email, fav } = userData;

// console.log(firstname);
// console.log(age);
// console.log(email);
// console.log(fav);

function greetUser({ fav, firstname, age, email }) {
  console.log(`Hello my name is ${firstname} and  my fav game is ${fav}`);
}

// greetUser(userData)

const {
  firstname: username,
  age: userAge,
  email: userEmail,
  fav: favorite,
} = userData;
console.log(username);
console.log(userAge);
console.log(userEmail);
console.log(favorite);

// spread operator
const quotes = [
  {
    id: 1,
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    id: 2,
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    id: 3,
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
];

const response = [
  {
    id: 4,
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    id: 5,
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
];

const updatedArr = [...quotes, ...response]
console.log(updatedArr);
