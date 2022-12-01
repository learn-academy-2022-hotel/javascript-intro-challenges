
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

let item = 100

if (item <= 100){
    console.log("in budget")}

    //Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

    let hungry = "no"


    if (hungry === "yes")

{
    console.log("eat food")}
    else{console.log ("keep coding")}
    

   // Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

   let trafficLight = "cat"

   if (trafficLight === "green"){
    console.log("go")
   } else if (trafficLight === "yellow"){
    console.log("slow down")
   } else {
    console.log("stop")
   }

   // Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

let numberOne = 2
let numberTwo = 2

if (numberOne === numberTwo){
    console.log("the numbers are the same")
}

else if (numberOne < numberTwo){
    console.log(`${numberTwo}`)
}else if (numberOne > numberTwo)
{
    console.log(`${numberOne}`)}

//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

let number = 5

if (number % 2 == 0){
    console.log("even")
}
if (number % 2 >= 1){
    console.log("odd")
}

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

let grade = 0

if (grade === 100){
    console.log("Perfect score")
} else if (grade >= 90){
    console.log("A")
} else if (grade >= 80){
    console.log("B")
} else if (grade >= 70){
    console.log("C")
} else if (grade >= 60){
    console.log("D")
} else if (grade >= 1){
    console.log("F")
} else {
    console.log("zero")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

console.log(typeof 42)
console.log(typeof 'blubber')
console.log(typeof true)
console.log(typeof myPets)

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password = "qwertyuiop[]!"

if (password===)