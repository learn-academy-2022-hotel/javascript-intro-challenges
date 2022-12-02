// Write a function named marco that returns "polo".

// function: marco, polo
// input: string of "marco"
// output: if input is marco, output is polo.
// otherwise, output error message

const marcoPolo = (input1) => {
    if(input1 === 'marco'){
        return "polo"
    } else{
        return "That's not marco..."
    }
}
console.log(marcoPolo('marco'))

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// function: greeting
// input: person's name (string)
// output: greeting using inputted name

const greeting = (name) => {
    if(typeof name === "string"){
        return `Welcome, ${name}!`
    } else{
        return "That's not a name!"
    }
}
console.log(greeting(5))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// function: oddOrEven
// input: number
// output: log of whether inputted number is odd or even

const oddOrEven = (userNum) => {
    if(userNum % 2 === 0){
        return `${userNum} is even!`
    } else{
        return `${userNum} is odd!`
    }
}
console.log(oddOrEven(12))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// function: triple
// input: number
// output: inputted number * 3

const triple = (userNum1) => {
    let answer = userNum1*3
    return `${userNum1} multiplied by 3 is ${answer}`
}
console.log(triple(5))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// function: multiply
// input: 2 numbers
// output: product of the 2 numbers

const multiply = (num1, num2) => {
    let answer = num1*num2 
    return `${num1} times ${num2} equals ${answer}`
}
console.log(multiply(10,5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// function: divisibleBy
// input: 2 numbers
// output: message saying if first number is evenly divisible by second number

const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}.`
    } else{
        return `${num1} is not evenly divisible by ${num2}`
    }
}
console.log(divisibleBy(100,3))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// function: assignGrade
// input: number score
// output: letter grade

const assignGrade = (numberScore) => {
    if(numberScore >= 90){
        return `${numberScore} is an A!`
    } else if (numberScore >= 80){
        return `${numberScore} is a B!`
    } else if (numberScore >= 70){
        return `${numberScore} is a C.`
    } else if (numberScore >= 65){
        return `${numberScore} is a D...`
    } else{
        return "You failed"
    }
}
console.log(assignGrade(5))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// function: isLonger
// input: 2 strings
// output: string with most characters

const isLonger = (string1, string2) => {
    if(string1.length > string2.length){
        return "The first sentence is longer than the second sentence"
    } else if (string1.length < string2.length){
        return "The second sentence is longer than the first sentence"
    } else{
        return "They are the same length"
    }
}
console.log(isLonger("hello", "hello"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// function: greaterNum
// input: 2 numbers
// output: the number that is greater

const greaterNum = (num1, num2) => {
    if(num1 > num2){
        return `${num1} is greater than ${num2}`
    } else if(num1 < num2){
        return `${num2} is greater than ${num1}`
    } else{
        return "These numbers are the same"
    }
}
console.log(greaterNum(25, 25))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// function: yelling
// input: string
// output: string in all capital letters

const yelling = (userString) => {
    let yell = userString.toUpperCase()
    return yell
}
console.log(yelling("i am yelling now"))