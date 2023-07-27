//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php'
  // `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks.strDrinks)

        // data.drinks.forEach(obj => console.log(obj.name))
          // console.log(data.drink)
          // console.log(data.drinks.strDrink)
          // strDrinkThumb
    

        // const li = document.createElement('li')
        // if(data.media_type === "image"){
        //   document.querySelector('img').src = data.hdurl
        // }else if(data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url
        // }else{
        //   alert('Media Not Supported - Contact NASA IMMEDIATLY')
        // }
       
        // document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

