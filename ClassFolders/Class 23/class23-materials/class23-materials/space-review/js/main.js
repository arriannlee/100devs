//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [21,22,23,24]

alert(nums.reduce((acc,c) => acc + c, 0))
// let sum = nums.reduce((acc,c) => acc + c, 0)
// alert(sum) 

//Create a function that takes in an array of numbers

let newArr = nums => nums.map(num => num**2)


//Return a new array of numbers that is every original number squared


// let newArrOfNums = arrOfNums(Math.sqrt())



//Create a function that takes string

// function iAmAStr (banana)
//Print the reverse of that string to the console

// console.log(iAmAStr.reverse())
// //Create a function that takes in a string

// function thisIsStr (chicken)
// //Alert if the string is a palindrome or not
// alert(thisIsStr.palindrome)