// Template String - use cases
// 1. Creating dynamic strings
const username = "Max";
const greet = `Good Morning ${username}`;
console.log(greet);

// 2. Inject HTML Elements
const greetElement = document.getElementById("greet");
greetElement.innerHTML = `
<h1>${username}</h1>
<p>Hello world</p>
<p>Hello world</p>
<p>Hello world</p>
<p>Hello world</p>
`;

// 3. complex queries for API
const baseUrl = "http://localhost:3000/api";
const endpoint = "users";
const id = 10;
const query = "hello world"
const url = `${baseUrl}/${endpoint}?id=${id}?q=${query}`;
console.log(url); // output: "https://example.com/api/users?id=123"

