//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too








// function checkAge(){
//     if (age < 16){
//         return 'tell them they can not drive'
// }
// }

//--- Harder
//On click of the h1

document.querySelector('#check').addEventListener('click', checkAge)

//Take the value from the input
function checkAge(){

    const age = document.querySelector('#danceDanceRevolution')

    if (age < 16){
        return 'tell them they can not drive'
    } else if(age < 18){
        return 'tell them they can\'t hate from outside the club, because they can\'t even get in'
    } else if (age < 21){
        return 'tell them they can not drink'
    } else if(age < 25){
        return 'tell them they can not rent cars affordably'
    } else if(age < 30){
        return 'tell them they can not rent fancy cars affordably'
    } else {
        return 'tell them there is soooooo much to look forward to'
    }
}

console.log(checkAge)

//Place the result of the conditional in the paragraph


























































// let age = 77

// if (age < 16){
//     console.log('you can not drive')
// } else if (age < 18){
//     console.log('you can\'t hate from outside the club, because they can\'t even get in')
// } else if (age < 21){
//     console.log('you can not drink')
// } else if (age < 25){
//     console.log('they can not rent cars affordably')
// } else if (age < 30){
//     console.log('they can not rent fancy cars affordably')
// } else {
//     console.log('there is nothing left to look forward too')
// }