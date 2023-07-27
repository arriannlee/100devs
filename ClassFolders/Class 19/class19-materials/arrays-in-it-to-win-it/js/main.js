//Create an array of movies with at least three movies.

let movies = ['Conjuring', 'Devil', 'Insidius']

//Using the array from above, store the first movie in a variable

let favMovie = movies[0]
console.log(favMovie)

//Get the length of the original array and store it in a new variable

let storedMovies = movies.length

console.log(storedMovies)

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let leastFavMovie = movies[movies.length  -1]
console.log(leastFavMovie)