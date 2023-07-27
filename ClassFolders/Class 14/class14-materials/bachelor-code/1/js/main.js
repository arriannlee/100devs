// when clicking on final rose the winner will be revealed and others will be hidden

// contestants

const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

// eventlistener

const finalRose = document.addEventListener('click', hide)

function hide(){
    claire.style.display = 'none'
    sharleen.style.display = 'none'

}



































// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide(){
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }
