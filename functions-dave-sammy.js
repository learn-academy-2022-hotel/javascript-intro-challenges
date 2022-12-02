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



// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.