
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