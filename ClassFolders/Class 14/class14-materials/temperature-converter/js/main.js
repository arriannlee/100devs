// //Write your pseduo code first! 


document.querySelector('#convert').addEventListener('click', run)

function run() {
    
    let temp = document.querySelector('#temp').value

    temp = temp * 9/5 + 32

    document.querySelector('#convertOutput').innerText = temp 
}


