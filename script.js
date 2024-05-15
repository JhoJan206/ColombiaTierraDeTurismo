const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSections = document.querySelectorAll(".slider-section");
let counter = 0;

btnLeft.addEventListener("click", moveToLeft);
btnRight.addEventListener("click", moveToRight);

function moveToRight() {
    counter++;
    if (counter >= 3) {
        counter = 0;
    }
    moveSlider();
}
function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSections.length - 13;
    }
    moveSlider();
}
function moveSlider() {
    let totalWidth = 0;
    sliderSections.forEach(section => {
        totalWidth += section.offsetWidth;
    });
    let slideWidth = totalWidth / sliderSections.length;
    let slidePosition = -counter * slideWidth;
    slider.style.transform = `translateX(${slidePosition}px)`;
}