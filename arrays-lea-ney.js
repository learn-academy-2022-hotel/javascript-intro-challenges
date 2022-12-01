// Write the code that will add "soda" to the end of the original array.

let groceryList = ["chips", "dip", "cookies"]

groceryList.push("soda")
//console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.

//console.log(groceryList.concat("granola"))

// Write the code that will return a subset of the array containing only "chips" and "dip".

//console.log(groceryList.slice(0 , 2))


// Write the code that will add "beans" to the "chips" and "dip" array.

let nachoList = groceryList.slice(0 , 2)

//console.log(nachoList.concat("beans"))

//Write the code that will add the number 0 to the beginning of the array.

let numbers = [2, 4, 6, 8, 10]

numbers.unshift(0)
//console.log(numbers)

// Write the code that will add the number 12 to the end of the array.

numbers.push(12)
//console.log(numbers)

//Write the code that will remove the first number from the array.

numbers.shift()
//console.log(numbers)

//Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

//console.log([0].concat(numbers))

// Write the code that finds the index of the last appearance of the number 2.

let numSet = [2, 13, 6, 8, 4, 2]

//console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.

//console.log(numSet.slice(3, 4))


// Write the code that brings all the letters in the characters array together into a string.

//let characters = ["y", "a", "r", "r", "a"]



//console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

//let charsReverse = characters.reverse()
//console.log(charsReverse)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

//console.log(charsReverse.join("*"))

//Write the code that brings all the letters in the charsReversed array together into a string without separators.

//console.log(charsReverse.join(""))

//Create two arrays consisting of three first names of your cohort members in each.

let myArray1 = ["moss", "dom", "ney"]

let myArray2 = ["lea", "chris", "matt"]

// Write the code that sorts the names in alphabetical order.

myArray1.sort()
//console.log(myArray1)


myArray1.sort()
//console.log(myArray2)


//Write the code that sorts the names in reverse alphabetical order.

let sortedArray = myArray2.sort()


//console.log(myArray1.reverse())
//console.log(sortedArray.reverse())

//Write the code that sorts all the names in alphabetical order in a single array.

console.log(myArray1.concat(myArray2))


