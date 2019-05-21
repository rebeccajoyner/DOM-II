// Your code goes here


const mouseEvent = document.querySelector("nav");
mouseEvent.addEventListener.addEventListener("mouseover", function (event) {
    event.target.style.color = '#30f247';

    setTimeout(function () {
        event.target.style.color = "";
    }, 400);
}, false);