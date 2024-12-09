

function changeButtonStyle() {
    button.style.backgroundColor="blue"; 
    button.style.color="white";

}


let button = document.querySelector("button");
button.addEventListener("click", changeButtonStyle);

//this section open and closes and image
let open = document.querySelector("open")
open1.addEventListener("click", showitems);