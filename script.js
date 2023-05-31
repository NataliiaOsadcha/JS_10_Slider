let slides = document.getElementsByClassName("slider__slide");
let currentSlide = 0;

const next = document.getElementById("nav-button--next");
const prev = document.getElementById("nav-button--prev");


next.addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
prev.addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});


function changeSlide(moveTo) {
    if (moveTo <= 0) {
        prev.classList.add("slick-disabled");
    } else { 
        prev.classList.remove("slick-disabled");} 
    
    if (moveTo >= slides.length - 1) {
        next.classList.add("slick-disabled");
    } else { 
        next.classList.remove("slick-disabled");}     
       
    


    slides[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}