console.log("JavaScript is connected!");

// Get the button element
const button = document.querySelector('#generate-btn');
const colourBox = document.querySelector('#colour-box');


button.addEventListener("click", function() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`;
    colourBox.style.backgroundColor = randomColor;
    console.log("the button to generate has been pressed")
});

