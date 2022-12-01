// Consider the variable:
// Write the code that will add "soda" to the end of the original array.
var groceryList = ["chips", "dip", "cookies"]
// groceryList.push("soda")
// console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.
let newGroceryList = groceryList.concat("granola")
// console.log(newGroceryList)
// console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".
// console.log(groceryList.slice(0,2))

// Write the code that will add "beans" to the "chips" and "dip" array.
// console.log(groceryList.slice(0,2).concat("beans"))

// Consider the variable:
// Write the code that will add the number 0 to the beginning of the array.
var numbers = [2, 4, 6, 8, 10]
numbers.unshift(0)
// console.log(numbers)

// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
// console.log(numbers)

// Write the code that will remove the first number from the array.
numbers.shift()
// console.log(numbers)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
let newNumbers = numbers.concat(0).sort((a, b) => a - b)
// console.log(newNumbers)
// console.log(numbers)

// Consider the variable:
// Write the code that finds the index of the first appearance of the number 2.
var numSet = [2, 13, 6, 8, 4, 2]
// console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.
// console.log(numSet[2])

// Consider the variable:
// Write the code that brings all the letters in the characters array together into a string.
var characters = ["y", "a", "r", "r", "a"]
// console.log(characters.join(""))
// console.log(characters)

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// Create two arrays consisting of three first names of your cohort members in each.

// Write the code that sorts the names in alphabetical order.

// Write the code that sorts the names in reverse alphabetical order.

// Write the code that sorts all the names in alphabetical order in a single array.

// Consider the variables:

// var numbers = [42, 221, 71, 7, 18, 87]
// var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.

// Write the code that adds the values from odd indexes into the oddIndexes array.