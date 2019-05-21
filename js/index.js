// Your code goes here


const mouseEvent = document.querySelector("nav");
mouseEvent.addEventListener("mouseover", function(event) {
    event.target.style.color = "#30f247";

    setTimeout(function() {
        event.target.style.color = "";
    }, 400);
}, false);



const wheel1 = document.querySelector("body");
wheel1.addEventListener('wheel', event => {
    alert(event.textContent='Elan is the best-but dont be like Elan')
});
