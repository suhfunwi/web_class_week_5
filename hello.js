console.log('Hello World')

// three ways to create variables
let color = 'blue'
//let is the most general way to make a variable
var size = 'medium'
// not recommended due to the larger scope,
// so the variable could exist in more places than expected.
const language = 'Javascript'
//can't change this value, const is typically used to
//define final values or variables that won't change.
let  quantity = 5
let distance = 4.5
//number type variables, doesn't matter if they are decimals
let text = 'hello world'
let message = 'Hi programmers'
//strings can be identified with single/double quotes
console.log('There are ' + quantity + 'programmers')
// can put numbers and strings together
let todayTemp = 60
console.log('Today the temperature is ' + todayTemp + ' degrees Fahrenheit.')

let tempC = (todayTemp - 32) * 5/9
console.log("Today's temperature is " + tempC.toFixed(2) + "C")
//can do math normally in javascript
// toFixed is to limit the number to two decimal places
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is equivalent to ${todayTemp}F`)
//exact same code, just in a template string. They're a bit neater to use

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'
console.log(`This class is ${department} ${classCode} ${className}`)

