// Modules - split the code into multiple files / reuse
// Keyword - Import and Export
// 2 types - Named Export and Default Export

import greetMessage, {username, hobby as abc, addNumbers, multiplyNumbers, subtrackNumbers} from './named-export.js'
import greet from   './default-export.js'
console.log(username);
console.log(abc);

addNumbers(1, 2)
multiplyNumbers(1, 2)
subtrackNumbers(1, 2)

greet("John")
greetMessage("Max")

