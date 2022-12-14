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
let charsReversed = characters.reverse()
// console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// console.log(charsReversed.join("*"))
// console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.
let array1 = ['octavio', 'matt', 'james']
let array2 = ['raquel', 'oscar', 'dom']

// Write the code that sorts the names in alphabetical order.
// console.log(array1.sort())
// console.log(array2.sort())

// Write the code that sorts the names in reverse alphabetical order.
// console.log(array1.reverse())
// console.log(array2.reverse())

// Write the code that sorts all the names in alphabetical order in a single array.
// console.log(array1.concat(array2).sort())

// Consider the variables:
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.
// console.log(numbers[1], numbers[3], numbers[5])

// Write the code that adds the values from odd indexes into the oddIndexes array.
oddIndexes = [numbers[1], numbers[3], numbers[5]]
// console.log(oddIndexes)