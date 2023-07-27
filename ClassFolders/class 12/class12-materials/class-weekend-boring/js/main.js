document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value


  //Conditionals go here

if(day === "tuesday" || day === "thursday"){
    alert('Class Day!')
} else if (day === "saturday" || day === "sunday"){
    alert('WEEKEND BABYYYYY!!!!')
} else {
    alert('BORINGGGGG!!!!')
}
}

// function toLowerCase(day){
//     strInput.value=strInput.value.toLowerCase();
// }
