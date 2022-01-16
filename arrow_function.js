// https://www.digitalocean.com/community/tutorials/understanding-arrow-functions-in-javascript

// named function declarations allow function hoisting
const output = sum(1, 2)

function sum(a, b) {
  return a + b
}
console.log(sum) 
console.log(output)

//anonymous function expressions (not hoisting)
// 
// multiply(2,3) - Attempting to execute the function before it is declared will result in an error:
//ReferenceError: Cannot access 'multiply' before initialization
const multiply = function(a, b) {
    return a * b
}
const output2 = multiply(2,3)
console.log(multiply)
console.log(output2)

// arrow function expression (non hoisting)
const square = (a) => {
    return a * a
}
const output3 = square(4)
console.log(square)
console.log(output3)

//arrow expression implicit return
//const sum2 = (a, b) => {return a + b}
const sum2 = (a, b) => a + b
console.log(sum2)
console.log(sum2(2, 3))

// In the case of returning an object, syntax requires that you wrap the object literal in parentheses. Otherwise, the brackets will be treated as a function body and will not compute a return value.
const sum3 = (a, b) => ({result: a + b})
console.log(sum3)
console.log(sum3(2, 3))

//Omitting Parentheses Around a Single Parameter
const square2 = a => a * a
console.log(square2)
console.log(square2(3))

// Note that if a function takes no parameters, parentheses will be required:
const greeting = () => 'Hello!'
console.log(greeting)
console.log(greeting())