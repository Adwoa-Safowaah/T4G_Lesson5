//function changeButtonStyle() {
    //button.style.backgroundColor="blue"; 
    ///button.style.color="white";

//}

// DOM
document.addEventListener("DOMContentLoaded", () =>{
    let openButton = document.querySelector("#open-button");
    let closeButton = document.querySelector("#close-button");
    let imageContainer = document.querySelector("#image-container");

// Show image and close button, hide open button
openButton.addEventListener("click", () => {
    imageContainer.style.display = "block";
    closeButton.style.display = "inline-block";
    openButton.style.display = "none";
});

// Hide image and close button, show open button
closeButton.addEventListener("click", () => {
    imageContainer.style.display = "none";
    closeButton.style.display = "none";
    openButton.style.display = "inline-block";
});
});