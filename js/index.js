// Your code goes here


const mouseEvent = document.querySelector("nav");
mouseEvent.addEventListener("mouseover", function(event) {
    event.target.style.color = "#30f247";

    setTimeout(function() {
        event.target.style.color = "";
    }, 400);
}, false);



const Elan = document.querySelector("body");
Elan.addEventListener('wheel', event => {
    alert(event.textContent='Elan is the best *but dont be like Elan')
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

