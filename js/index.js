// Your code goes here


const mouseEvent = document.querySelector("nav");
mouseEvent.addEventListener("mouseover", function(event) {
    event.target.style.color = "#31b0f5";

    setTimeout(function() {
        event.target.style.color = "#ff9900";
    }, 900);
});



const Elan = document.querySelector("body");
Elan.addEventListener('wheel', event => {
    alert(event.textContent='Most annoying popup.')
});




const body = document.querySelector('body');

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

body.onclick = function() {
  body.style.backgroundColor = randomColor();
};


