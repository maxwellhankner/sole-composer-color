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
