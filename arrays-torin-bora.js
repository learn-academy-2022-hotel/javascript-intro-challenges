var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.

// Write the code that will add "granola" to the end of array without altering the original array.

// Write the code that will return a subset of the array containing only "chips" and "dip".

// Write the code that will add "beans" to the "chips" and "dip" array.

groceryList.push("soda")
console.log(groceryList)

var groceryListTwo = ["granola"]
console.log(groceryList.concat(groceryListTwo))

console.log(groceryList.slice(0, 2))
// slice includes elements between index numbers

// groceryList.slice(0, 2).push("beans")
// console.log(groceryList)

var groceryListThree = ["beans"]
var completedGroceryList = 