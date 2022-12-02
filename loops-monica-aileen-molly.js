// Create a for loop that logs each number from 1 - 20.
const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// for(let i=0; i<20; i++) {
//     console.log("value:", numsArray[i])
// }

// Create a for loop that logs every other number from 1 - 20.
// for(let i=0; i<numsArray.length; i+=2) {
//     console.log(numsArray[i])
// }

// Create a for loop that logs the result of each number from 1 - 20 tripled.
// for(let i=0; i<numsArray.length; i++) {
//    console.log(numsArray[i] * 3)
// }

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
for(let i=0; i<numsArray.length; i++) {
    if(numsArray[i] % 2 === 0) {
        console.log(numsArray[i])
    } else if(numsArray[i] % 2 > 0) {
        console.log(`ODD`) 
    } 
}
// Consider this variable:

// const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
// Create the code that will log the smallest number from the array.
// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
// Consider this variable:

// const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
// Create the code that will log every other character in the string.
// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc