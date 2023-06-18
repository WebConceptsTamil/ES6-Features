// Named Exports
export const username = "John Doe";
export const hobby = "painting";

export function addNumbers(a, b) {
  console.log(a + b);
  return a + b;
}

export function multiplyNumbers(a, b) {
  console.log(a * b);
  return a * b;
}

 function subtrackNumbers(a, b) {
  console.log(a - b);
  return a - b;
}

export {subtrackNumbers}

export default function greetMessage(username){
  console.log(`Hello ${username}`);
  return `Hello ${username}`
}