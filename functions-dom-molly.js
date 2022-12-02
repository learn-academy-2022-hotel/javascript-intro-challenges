// Write a function named marco that returns "polo".
// create a function that inputs marco and returns polo
const gameName = () => {
    return "polo"
}
console.log(gameName())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// create a function that inputs a name and returns Welcome persons name
const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting("Dom"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// creates a function that inputs a number and returns whether the number is odd or even
const oddOrEven = (number) => {
    if(number % 2 === 0){
        return `even`
    } else{
        return `odd`
    }
}
console.log(oddOrEven("11"))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// creates a function that inputs a number and returns the number times 3
const triple = (number) => {
    return number * 3
}
console.log(triple("5"))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// create a function that multiplies two inputs and returns the answer
const mulitply = (num1, num2) => {
    return num1 * num2
}
console.log(mulitply(4, 8))

// Write a function named divisibleBy that takes two numbers as arguments and 
// returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// create a function that takes two inputs and returns the output and logs if they are divisible by each other
const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}`
    }
}
console.log(divisibleBy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// create a function that inputs a number and outputs a grade
const assignGrade = (number) => {
    if(number < 40){
        return `F`
    } else if(number >= 40){
        return `A`
    } else {
        return `error`
    }
}
console.log(assignGrade(65))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// create a function that inputs two arguments and returns the longer argument
const isLonger = (sentence1, sentence2) => {
    if(sentence1.length > sentence2.length){
        return `sentence1 is longer`
    } else {
        return `sentence2 is longer`
    }
}
console.log(isLonger("the dog fast", "the cat walks"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// create a function that inputs two numbers and returns the greater
const greaterNum = (num1, num2) => {
    if(num1 > num2){
        return `${num1}`
    } else {
        return `${num2}`
    }
}
console.log(greaterNum(9, 8))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.