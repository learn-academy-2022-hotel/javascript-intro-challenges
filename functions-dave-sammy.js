// Write a function named marco that returns "polo".

const marco = () => {
    return 'polo'
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (yourName) => {

    return `Welcome, ${yourName}!`
}
console.log(greeting('Dave'))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (number) => {

    if(number % 2 === 0){
        return 'even'
    }
    else if (number % 2 === 1){
        return 'odd'
    }
    else {
        return 'Error'
    }
}
console.log(oddOrEven(59))
console.log(oddOrEven(100))
console.log(oddOrEven(0))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (number) => {

    return `${number}` * 3
}
console.log(triple(3))


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1, num2) => {
  return num1 * num2
}
console.log(multiply(5, 8))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) => {
  let division = num1 / num2
  if (division % 2 === 0) {
    return `${num1} is evenly divisible by ${num2}`
  } else {
    return `${num1} is not evenly divisible by ${num2}`
  }
}
console.log(divisibleBy(40, 5));
console.log(divisibleBy(36, 5));

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (numberScore) => {
  if (numberScore >= 90) {
    return 'A'
  } else if (numberScore >= 80) {
    return 'B'
  } else if (numberScore >= 70) {
    return 'C'
  } else if (numberScore >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}
console.log(assignGrade(95))
console.log(assignGrade(85))
console.log(assignGrade(75))
console.log(assignGrade(65))
console.log(assignGrade(35))
console.log(assignGrade(150))
console.log(assignGrade(59))


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// if string one is bigger return string 1
// if string 2 is bigger return string 2
// .length will mak

const isLonger = (str1, str2) => {
  if (str1.length > str2.length) {
    return `${str1}`
  } else {
    return `${str2}`
  }
}
console.log(isLonger("hello my name is dave", "hello"))
console.log(isLonger("hello", "hello my name is dave"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (num1, num2) => {
  if (num1 > num2) {
    return `${num1}`
  } else if (num2 > num1) {
    return `${num2}`
  } else {
    return 'You Lose'
  }
}
console.log(greaterNum(35, 73))
console.log(greaterNum(44, 22))
console.log(greaterNum(73, 73))
console.log(greaterNum(-35, -73))


// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (string1) => {
  let word = string1.toUpperCase()
  return `${word}`
}
console.log(yelling("blah blah make this big"))

// The World Translator
//
// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!"
// in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

const helloWorld = (languageCode) => {
  if (languageCode === "en") {
    return 'Hello World!'
  } else if (languageCode === "es") {
    return 'Hola Mundo!'
  } else if (languageCode === "de") {
    return 'Hallo Welt!'
  } else if (languageCode === "fr") {
    return 'Bonjour le monde'
  } else if (languageCode === "pt") {
    return 'Ola Mundo'
  } else {
    return "you lose"
  }
}
console.log(helloWorld("de"))
console.log(helloWorld("es"))
console.log(helloWorld("fr"))
console.log(helloWorld("pt"))
console.log(helloWorld("dd"))

// The Pluralizer
//
// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
