// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

let sofa = 50
if(sofa <= 100){
    console.log("item is in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

let hungry = "yes"
hungry = "no"
if(hungry === "yes"){
    console.log("eat food")
} else {
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = "green"
trafficLight = "yellow"
trafficLight = "red"
if (trafficLight === "green"){
    console.log("go")
} else if(trafficLight === "yellow"){
    console.log("slow down")
} else {
    console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

let numOne = 10
let numTwo = 20
if(numOne > numTwo){
    console.log(numOne)
} else if (numOne < numTwo){
    console.log(numTwo)
} else {
    console.log("the numbers are the same")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

let numThree = 11
if(numThree === 0){
    console.log("zero")
} else if (numThree % 2 === 0){
    console.log("even")
} else {
    console.log("odd")
}

// Stretch Goals

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

let grade = 0 
if(grade === 100){
    console.log('perfect score')
}
else if(grade === 0){
    console.log('no grade available')
}
else if(grade >= 90){
    console.log('A')
}
else if(grade >= 80){
    console.log('B')
}
else{
    console.log('D')
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

let variable = 'fjlkasdjflsdkjfsl'

if(variable === false || variable === true){
    console.log(typeof variable)
}
else if(variable == 'string'){
    console.log(typeof variable)
}
else{
    console.log(typeof variable)
}
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password = ''

if(password.length >= 12 && password.includes('!')){
    console.log('That is a mighty strong pasword!')
}
else if(password.length >= 8 || password.includes('!')){
    console.log('That password is strong enough.')
}
else{
    console.log('That is not a valid password.')
}