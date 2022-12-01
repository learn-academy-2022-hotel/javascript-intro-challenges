//Write the code that will log the outcome of 34 added to 71.
console.log(34+71)
//Write the code that will log the outcome of 67 subtracted from 123.
console.log(123-67)
//Write the code that will log the outcome of 56 multiplied by 23.
console.log(56*23)
//console.warn();rite the code that will log the outcome of 45 divided by 5.
console.log(45/5)
//Write the code that will log the outcome of 5 to the power of 7.
console.log(5**7)
//Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33%6)
//Write the code that will log the length of a string containing your name.
let message = "Molly"
//Write the code that will log the length of a string containing your name.
console.log(message.length)
////Write the code that will log whether your string includes the letter "e"?
console.log(message.includes("e"))
//Write the code that will log the character at the first index of the string.
console.log(message [0])
//Write the code that will log the string in all uppercase letters.
let result = message.toUpperCase();
console.log(result)

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let item = 90
if (item <=100 ) {
  console.log ("in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// let hungry = false
let hungry = true
if (hungry === true) {
  console.log ("eat food")
  } else {
  console.log ("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// let trafficLight = "green"
let trafficLight = "yellow"
if (trafficLight === "green") {
  console.log("go")
} else if (trafficLight === "yellow") {
  console.log("slow down")
} else if (trafficLight === "red") {
  console.log("stop")
}


// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let number1 = 2
let number2 = 10
if (number1 === number2) {
  console.log ("The numbers are the same.")
} else if (number1 > number2) {
  console.log (number1)
} else if (number2 > number1) {
  console.log (number2)
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
//let number = 99
// let number = 98
let number = 0
if (number === 0) {
  console.log ("zero")
} else if (number % 2==0) {
  console.log ("even")
} else {
  console.log ("odd")
}
