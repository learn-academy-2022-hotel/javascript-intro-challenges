// Write a function named marco that returns "polo".

// We want to create a function that takes the input marco and returns the output polo
const name = (Marco) => {
    return "polo"
}
console.log(name())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// We want to write a function that takes a name and returns the greeting with the name.
const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting("Matt"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// We want to write a function that takes a number as an argument and returns if the number is even or odd. We'll need to create a conditional that if the number even it returns "even". Then if it's not even then it returns "odd".
const oddOrEven = (number) => {
    if(number % 2 === 0) {
        return "This number is even"
    } else {
        return "This number is odd"
    }
}
console.log(oddOrEven(17))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// We want to write a function that takes a number and returns it output multiplied by 3

const triple = (number) => {
    return (number * 3)
}
console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// We want to write a function that takes two arguments and returns them multplied together.
const multiply = (num1, num2) => {
    return (num1 * num2)
}
console.log(multiply(5, 5))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// We want to write a function that takes two arguments and returns a string if the first number is evenly divisible by the second.
const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}.`
    } else {
        return `${num1} is not evenly divisible by ${num2}.`
    }
}
console.log(divisibleBy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// We want to write a function that takes the number score and returns the letter grade. We will create a conditional that takes the argument and returns the letter grade.

const assignGrade = (score) => {
    if (score === 100) {
        return "perfect score"
    }   else if (score >= 90) {
        return "A"
    }   else if (score >= 80) {
        return "B"
    }   else if (score >= 70) {
        return "C"
    }   else if (score >= 60) {
        return "D"
    }   else{
        return "F"
    }
}
console.log(assignGrade(75))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// We want to write a function that takes two strings and returns the string that is longer. We will create a conditional with a length property and returns a string interpolation of the longest string.

const isLonger = (string1, string2) => {
    if(string1.length > string2.length) {
        return `${string1}`
    } else {
        return `${string2}`
    }
}
console.log(isLonger("This should be longer", "Bed"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

//We will write a function that takes two numbers and returns the number that is bigger. We will create a conditional that returns the higher number.

const greaterNum = (num1, num2) => {
    if(num1 > num2) {
        return `${num1}`
    } else {
        return `${num2}`
    }
}
console.log(greaterNum(52, 75));
// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// We're going to write a function that takes a string and returns it back in upper case. We'll use the built-in method .toUpperCase

const yelling = (string) => {
    let stringUpper = string.toUpperCase()
    return `${stringUpper}`
} 
console.log(yelling("hello"));

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
