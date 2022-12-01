// Write the code that will log the outcome of 34 added to 71.
console.log(34+71)
// Write the code that will log the outcome of 67 subtracted from 123.
console.log(123-67)
// Write the code that will log the outcome of 56 multiplied by 23.
console.log(56*23)
// Write the code that will log the outcome of 45 divided by 5.
console.log(45/5)
// Write the code that will log the outcome of 5 to the power of 7.
console.log(5**7)
// Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33%6)
// Write the code that will log the length of a string containing your name.
let nick = "romeo"
console.log(nick.length)
// Write the code that will log whether your string includes the letter "e"?
console.log(nick.includes("e"))
// // Write the code that will log the character at the first index of the string.
console.log(nick[0])
// // Write the code that will log the string in all uppercase letters.
console.log(nick.toUpperCase())

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3>67/2)
// Does 5 evaluate to the same as "5"?
console.log(5=="5")
// Does 5 strictly equal "5"?
console.log(5==="5")
// Does !3 strictly equal 3?
console.log(!3===3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length===5, "student".length===5)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
// Does "LEARN" contain the subset "RN"?
// Does "LEARN" contain the subset "rn"?
// Does "LEARN"[0] strictly equal "l"?
// Modify the code from the previous question to return true.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let item = 85
if (item < 100) {
    console.log("in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = 3
if (hungry === true) {
    console.log("Eat food")
} else {console.log("Keep coding")}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = "yellow"
if (trafficLight === "green") {
    console.log("Go") 
} else if (trafficLight === "yellow") {
    console.log("Slow down")
} else if (trafficLight === "red") {
    console.log("Stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let numOne = 12
let numTwo = 35
if (numOne === numTwo) {
    console.log("The numbers are the same")
} else if (numOne < numTwo) {
    console.log("35")
} else if (numTwo < numOne) {
    console.log("12")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let numThree = 13
if (numThree === 0) {
    console.log("The numnber is 0.") 
} else if (numThree % 2 === 0) {
    console.log("The number is even.")
} else {
    console.log("The number is odd")
}

// Stretch Challenges

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
let grade = 0
if (grade === 100) {
    console.log("Perfect score") 
} else if (grade == 0) {
    console.log("No grade available")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
let num = 15
console.log(typeof num)

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
let password = "12345ssssssssss"
if (password.length < 6) {
    console.log("That is not a valid password.")
}
else if (password.length >= 12 && password.includes("!")) {
    console.log("This is a mighty strong password!")
} else if (password.length <= 8 || !password.includes("!")) {
    console.log("That password is strong enough.")
} 