//Write the code that will log the outcome of 34 added to 71.

//console.log(34 + 71)

//Write the code that will log the outcome of 67 subtracted from 123.

//console.log(123 - 67)

//Write the code that will log the outcome of 56 multiplied by 23.

//console.log(56 * 23)

//Write the code that will log the outcome of 45 divided by 5.

//console.log(45 / 5 )

//Write the code that will log the outcome of 5 to the power of 7.

//console.log(5**7)

//Write the code that will log the whole number remainder of 33 divided by 6.

//console.log(33 % 6)

//Write the code that will log the length of a string containing your name.

//let name= "Natally"
//console.log(name.length)

//Write the code that will log whether your string includes the letter "e"?

//console.log(name.includes("e"))

//Write the code that will log the character at the first index of the string.

//console.log(name.charAt(0))

//Write the code that will log the string in all uppercase letters.

//console.log(name.toUpperCase(""))

//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let item = 100
if(item <= 100){
    console.log("In Budget")
} 

//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = true 
hungry = false
if(hungry===true){
    console.log("eat food")
} else {
    console.log("keep coding")
}
//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "green"
trafficLight = "red"
trafficLight = "red"

if(trafficLight == "green"){
    console.log("Go")   
} else if (trafficLight == "yellow"){
   console.log("Slow Down")
} else {
    console.log("Stop");
}
    
//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let num1 = 7
let num2 = 10

 num1 = 10
 num2 = 10

if(num1<num2){
    console.log(num2)
} else if(num1==num2){
    console.log("The numbers are the same")
}



//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero

let num = 11
 if(num == 0){
    console.log("zero")
} else if(num%2===0){
    console.log("even")
} else if(num%2 > 0){
    console.log("odd")
}


  //STRETCH GOALS

//Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

let grade = 63

if ( grade===100){
    console.log("perfect score")
}
else if(grade>=90 && grade<=99){
    console.log("A")
}
else if(grade>=80 && grade<=89){
    console.log("B")
}
else if(grade>=70 && grade<=79){
    console.log("C")
}
else if(grade>=60 && grade<=69){
    console.log("D")
}
else if(grade>=1 && grade==59){
    console.log("F")
}
else{
    console.log("no grade available")
}
//Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript type of operator.

let name = true
console.log(typeof name)


//Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password= "pass123!"
if(password.length>=12 && password.includes("!")){
    console.log( "That is a mighty strong password!" )
}
else if (password.length<=8 || password.includes("!")){
    console.log("That is not a valid password")
}
