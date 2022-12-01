// console.log(34+71)
// console.log(123-67)
// console.log(56*23)
// console.log(45/5)
// console.log(5**7)
// console.log(33%6)
// console.log("Dom".length)
// let greeting = "Dom"
// console.log(greeting.includes("e"))
// let tag = "Dave"
// console.log(tag.includes("v"))
// console.log("hello"[0])
// console.log(tag.toUpperCase())
// console.log(34/3 > 67/2)
// console.log(5 === "5")
// console.log(!3 !== 3)

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let hotdog = 98
if(hotdog <= 100){
  console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = false
if(hungry === true){
    console.log("eat food")
} else {
    console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let lightColor = "green"
if(lightColor === "red"){
    console.log("stop")
} else if(lightColor === "yellow"){
    console.log("slow down")
} else{
    console.log("go")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let numberOne = 2
let numberTwo = 2
if(numberOne > numberTwo){
    console.log(`${numberOne}`)
} else if(numberOne < numberTwo){
    console.log(`${numberTwo}`)
} else if(numberOne = numberTwo){
    console.log("the numbers are the same")
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let myNumber = 0
if(myNumber === 0){
    console.log("0")
} else if(myNumber % 2 == 0){
    console.log("the number is even")
} else{
    console.log("odd")
}
// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
let aHigh = 99
let aLow = 90
let bHigh = 89
let bLow = 80
let cHigh = 79
let cLow = 70
let dHigh = 69
let dLow = 65
let myGrade = 0

if(myGrade === 100) {
    console.log("You got 100%!")
} else if(myGrade <= aHigh && myGrade >= aLow) {
    console.log("You got an A!")
} else if(myGrade <= bHigh && myGrade >= bLow) {
    console.log("You got a B!")
} else if(myGrade <= cHigh && myGrade >= cLow) {
    console.log("You got a C!")
} else if(myGrade <= dHigh && myGrade >= dLow) {
    console.log("You got a D!")
} else if(myGrade === 0) {
    console.log("You got a zero")
} else {
    console.log("You got an F.")
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
console.log(typeof 42)
console.log(typeof 'Hello World')
console.log(typeof false) 
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
let myPassword = "ab"

if(myPassword.length >= 12 && myPassword.includes("!")) {
    console.log("That is a mighty strong password!")
} else if(myPassword.length >= 8 || myPassword.includes("!")) {
    console.log("That password is strong enough.")
} else {
    console.log("That is not a valid password.")
}
