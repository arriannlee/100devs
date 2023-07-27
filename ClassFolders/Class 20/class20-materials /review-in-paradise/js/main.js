// // *Variables*
// // Declare a variable, reassign it to your favorite food, and alert the value
// let favFood = 'salad'
// favFood = 'banana'
// alert(favFood)

// //Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
// let iAmAVar = 'blaaa'
// alert(iAmAVar[1])

// // *Functions*
// // Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
// function takesThreeNum(n1,n2,n3){
//   alert((n1/n2)*n3)
// }
// takesThreeNum(20,50,10)

// // Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
// function cubeRootIt(num1){
//   console.log(Math.cbrt(num1).toFixed(4))
// }
// cubeRootIt(100)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function takesInMonth(month){
  let monthLowerCase = month.toLowerCase()
  if(monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase 'august'){
    alert('Yay')
  }else{
    alert('Boo')
  }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
