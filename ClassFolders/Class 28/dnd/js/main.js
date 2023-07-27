//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

 
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('.spellName').innerText = `Spell Name ${data.name}`
        document.querySelector('.level').innerText = data.level 
        document.querySelector('.castingTime').innerText = data.casting_time
        document.querySelector('.duration').innerText = data.duration
        document.querySelector('.rangeArea').innerText = data.range
        // document.querySelector('.components').innerText = data.name
        // data.components.forEach(obj => {
        //   li.textContent = obj.name
        //   document.querySelector('.components').appendChild
        // })
        document.querySelector('.school').innerText = data.school.name
        document.querySelector('.attackSave').innerText = data.attack_type
        // document.querySelector('.damageEffect').innerText = data.name


        console.log(data)
        console.log(data.desc)
        console.log(data.subclasses)
        data.subclasses.forEach(obj => {
          console.log(obj.name)
        // creat an li
        const li = document.createElement('li')

        // add text to li
          li.textContent = obj.name
        // append the li to the ul   
          document.querySelector('ul').appendChild(li)
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
    }