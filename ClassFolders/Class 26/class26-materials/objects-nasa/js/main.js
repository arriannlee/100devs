//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

fetch("https://api.nasa.gov/planetary/apod?api_key=eoILEWXdS1q9v63gjvJo8DXrtFrtlPKsg3S1p7pV")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.explanation').innerText = data.explanation
      document.querySelector('.onThisDay').src = data.url
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
