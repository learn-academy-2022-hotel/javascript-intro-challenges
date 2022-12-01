// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let itemPrice = 10

if(itemPrice < 100) {
    console.log("in budget");
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = false

if(hungry === true) {
    console.log("eat food");
} else {
    console.log("keep coding");
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "red"

if(trafficLight === "green") {
    console.log("go");
} else if(trafficLight === "yellow") {
    console.log("slow down");
} else if(trafficLight === "red") {
    console.log("stop");
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let numberOne = 85
let numberTwo = 50

if(numberOne > numberTwo) {
    console.log(numberOne);
} else if(numberTwo > numberOne) {
    console.log(numberTwo);
} else {
    console.log("the numbers are the same");
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let number = 43

if(number === 0) {
    console.log("zero");
} else if(number % 2 === 0) {
    console.log("even number");
} else {
    console.log("odd number");
}

// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
let grade = 75

if (grade === 100) {
    console.log("perfect score");
}   else if (grade >= 90) {
    console.log("A")
}   else if (grade >= 80) {
    console.log("B")
}   else if (grade >= 70) {
    console.log("C");
}   else if (grade >= 60) {
    console.log("D");
}   else{
    console.log("F"); 
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

let name = 20

console.log(typeof name);

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let passWord = "Base"

if (passWord.length >= 12 && passWord.includes("!") ) {
    console.log("That is a mighty strong password!");
} else if (passWord.length >= 8 || passWord.includes("!")) {
    console.log("That password is strong enough.");
} else {
    console.log("That is not a valid password.");
}
