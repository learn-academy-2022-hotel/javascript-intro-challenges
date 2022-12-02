// var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
var groceryList = ["chips", "dip", "cookies"]
groceryList[3] = "soda"
console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.
var groceryList = ["chips", "dip", "cookies"]
console.log(groceryList)
groceryList.push("granola")
console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".
var groceryList = ["chips", "dip", "cookies"]
console.log(groceryList)
groceryList.pop()
console.log(groceryList)

// Write the code that will add "beans" to the "chips" and "dip" array.
var groceryList = ["chips", "dip"]
groceryList.push("beans")
console.log(groceryList)

// var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
var numbers = [2, 4, 6, 8, 10]
numbers.unshift(0)
console.log(numbers)

// Write the code that will add the number 12 to the end of the array.
var numbers = [2, 4, 6, 8, 10]
numbers.push(12)
console.log(numbers)

// Write the code that will remove the first number from the array.
var numbers = [2, 4, 6, 8, 10]
numbers.shift()
console.log(numbers)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var numbers = [2, 4, 6, 8, 10]
var otherNumbers = [0]
console.log(otherNumbers.concat(numbers))

// var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
var numSet = [2, 13, 6, 8, 4, 2]
console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.

// Write the code that returns the number at the third index.