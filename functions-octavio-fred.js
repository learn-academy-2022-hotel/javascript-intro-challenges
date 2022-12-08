// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
    return `polo`
}
// console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
}
// console.log(greeting("Octavio"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return `Your number is even`
    } else {
        return `Your number is odd`
    }
}
// console.log(oddOrEven(3))
// console.log(oddOrEven(4))
// console.log(oddOrEven(26))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
    return number * 3
} 
// console.log(triple(18))
// console.log(triple(-1))
// console.log(triple(0))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
}
// console.log(multiply(1, 4))
// console.log(multiply(2, 9))
// console.log(multiply(3, -3))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    } else {
        return `wrong answer`
    }
}
// console.log(divisibleBy(4, 2))
// console.log(divisibleBy(10, 3))
// console.log(divisibleBy(5, 0))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (number) => {
    if (number >= 92) {
        return `You made an A`
    } else if (number >= 84) {
        return `You made a B`
    } else if (number >= 76) {
        return `You made a C`
    } else if (number >= 70) {
        return `You made a D`
    } else {
        return `You made an F`
    }
}
// console.log(assignGrade(93))
// console.log(assignGrade(84))
// console.log(assignGrade(62))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (str1, str2) => {
    let str3 = str1.length
    let str4 = str2.length
    if (str3 > str4) {
        return `${str1}`
    } else if (str3 < str4) {
        return `${str2}`
    } else {
        return `These strings are the same length`
    }
}
// console.log(isLonger('at', 'tower'))
// console.log(isLonger('brat', 'tow'))
// console.log(isLonger('atlas', 'tower'))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => {
    if (num1 > num2) {
        return `${num1}`
    } else if (num2 > num1) {
        return `${num2}`
    } else {
        return `The numbers are the same`
    }
}
// console.log(greaterNum(3, 7))
// console.log(greaterNum(4, 1))
// console.log(greaterNum(5, 5))
// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (str1) => {
    let string = str1.toUpperCase()
    return string
}
// console.log(yelling('it'))

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
const helloWorld = (langCode, str) => {
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    return regionNames.of('BE');
    // regionNames.of('de');
    // regionNames.of('fr');
    // regionNames.of('sp');
    // regionNames.of('ar');

    // return regionNames
    // .toLocaleUpperCase('en') changes alphabet to the specified language code
}
console.log(helloWorld('be', 'Hello World!'))

// The Pluralizer
// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
