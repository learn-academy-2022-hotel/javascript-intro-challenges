var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.

groceryList.push('soda')
console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.

console.log(groceryList.concat('granola'))
console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".

console.log(groceryList.slice(0,2))

// Write the code that will add "beans" to the "chips" and "dip" array.'

var newGroceryList = groceryList.slice(0,2)

newGroceryList.push('beans')
console.log(newGroceryList)

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.

let numberZero = [0]
let newNumbers = numberZero.concat(numbers)
console.log(newNumbers)

// Write the code that will add the number 12 to the end of the array.

numbers.push(12)
console.log(numbers)

// Write the code that will remove the first number from the array.

let newArray = numbers.slice(1,5)
console.log(newArray)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

console.log(numberZero.concat(numbers))

console.log(numbers)