// contestants

const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const nikki = document.querySelector('#nikki')
const sharleen = document.querySelector('#sharleen')

const finalRose = document.querySelector('#finalRose')

finalRose.addEventListener('click', run)

function run() {
    claire.style.display = 'none'
    nikki.style.display = 'none'
    sharleen.style.display = 'none'
}