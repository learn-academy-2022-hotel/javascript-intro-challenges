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
