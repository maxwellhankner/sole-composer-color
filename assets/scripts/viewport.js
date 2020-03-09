// document.body.requestFullscreen();

// window.addEventListener('resize', () => {
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

// Disables scroll on mobile Chrome and Safari
document.body.addEventListener("touchmove", function(event) {
    event.preventDefault();
    event.stopPropagation();
}, false);

// document.ontouchmove = function(event){
//     event.preventDefault();
// }

var colorButton = document.getElementById('color-button');
var graphicButton = document.getElementById('graphic-button');

var colorButtons = document.getElementById('color-buttons');
var graphicButtons = document.getElementById('graphic-buttons');

colorButton.addEventListener("click", function(){
    colorButtons.style.display = "grid";
    graphicButtons.style.display = "none";
})

graphicButton.addEventListener("click", function(){
    colorButtons.style.display = "none";
    graphicButtons.style.display = "grid";
})