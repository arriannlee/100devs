//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita



document.querySelector('.cocktailButton').addEventListener('click', getCocktail)

function getCocktail(){
  let cocktail = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('.cocktailName').innerText = data.drinks[0].strDrink
      document.querySelector('.cocktailImg').src = data.drinks[0].strDrinkThumb
      document.querySelector('.ingredient1').innerText = data.drinks[0].strIngredient1
      document.querySelector('.ingredient2').innerText = data.drinks[0].strIngredient2
      document.querySelector('.ingredient3').innerText = data.drinks[0].strIngredient3
      document.querySelector('.ingredient4').innerText = data.drinks[0].strIngredient4
      document.querySelector('.ingredient5').innerText = data.drinks[0].strIngredient5
      document.querySelector('.ingredient6').innerText = data.drinks[0].strIngredient6
      document.querySelector('.ingredient7').innerText = data.drinks[0].strIngredient7
      document.querySelector('.ingredient8').innerText = data.drinks[0].strIngredient8
      document.querySelector('.ingredient9').innerText = data.drinks[0].strIngredient9
      document.querySelector('.ingredient10').innerText = data.drinks[0].strIngredient10
      document.querySelector('.ingredient11').innerText = data.drinks[0].strIngredient11
      document.querySelector('.ingredient12').innerText = data.drinks[0].strIngredient12
      document.querySelector('.ingredient13').innerText = data.drinks[0].strIngredient13
      document.querySelector('.ingredient14').innerText = data.drinks[0].strIngredient14
      document.querySelector('.ingredient15').innerText = data.drinks[0].strIngredient15
      document.querySelector('.measure1').innerText = data.drinks[0].strMeasure1
      document.querySelector('.instructions').innerText = data.drinks[0].strInstructions

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.drinks[0])
//       document.querySelector('.cocktailName').innerText = data.drinks[0].strDrink
//       document.querySelector('.cocktailImg').src = data.drinks[0].strDrinkThumb
//       document.querySelector('.ingredient1').innerText = data.drinks[0].strIngredient1
//       document.querySelector('.ingredient2').innerText = data.drinks[0].strIngredient2
//       document.querySelector('.ingredient3').innerText = data.drinks[0].strIngredient3
//       document.querySelector('.ingredient4').innerText = data.drinks[0].strIngredient4
//       document.querySelector('.ingredient5').innerText = data.drinks[0].strIngredient5
//       document.querySelector('.ingredient6').innerText = data.drinks[0].strIngredient6
//       document.querySelector('.ingredient7').innerText = data.drinks[0].strIngredient7
//       document.querySelector('.ingredient8').innerText = data.drinks[0].strIngredient8
//       document.querySelector('.ingredient9').innerText = data.drinks[0].strIngredient9
//       document.querySelector('.ingredient10').innerText = data.drinks[0].strIngredient10
//       document.querySelector('.ingredient11').innerText = data.drinks[0].strIngredient11
//       document.querySelector('.ingredient12').innerText = data.drinks[0].strIngredient12
//       document.querySelector('.ingredient13').innerText = data.drinks[0].strIngredient13
//       document.querySelector('.ingredient14').innerText = data.drinks[0].strIngredient14
//       document.querySelector('.ingredient15').innerText = data.drinks[0].strIngredient15
//       document.querySelector('.measure1').innerText = data.drinks[0].strMeasure1
//       document.querySelector('.instructions').innerText = data.drinks[0].strInstructions

    // })
    // .catch(err => {
    //     console.log(`error ${err}`)
    // });



//     document.querySelector('cocktailButton').addEventListener('click', 'enter', getCocktail)

// function getCocktail(){
//   let cocktail = document.querySelector('input').value

//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
//     .then(res => res.json()) // parse response as JSON
  