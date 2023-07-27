//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      document.querySelector('h2').innerText = data.title + ' published ' + data.publish_date + ' by ' + data.publishers
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}



