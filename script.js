document.querySelectorAll('.card').forEach((card, index) => {
    const btnLeft = card.querySelector(".btn-left");
    const btnRight = card.querySelector(".btn-right");
    const slider = card.querySelector(".slider");
    const sliderSections = card.querySelectorAll(".slider-section");
    let counter = 0;

    btnLeft.addEventListener("click", () => moveToLeft(slider, sliderSections));
    btnRight.addEventListener("click", () => moveToRight(slider, sliderSections));

    function moveToRight(slider, sliderSections) {
        counter++;
        if (counter >= sliderSections.length) {
            counter = 0;
        }
        moveSlider(slider, sliderSections);
    }

    function moveToLeft(slider, sliderSections) {
        counter--;
        if (counter < 0) {
            counter = sliderSections.length - 1;
        }
        moveSlider(slider, sliderSections);
    }

    function moveSlider(slider, sliderSections) {
        let totalWidth = 0;
        sliderSections.forEach(section => {
            totalWidth += section.offsetWidth;
        });
        let slideWidth = totalWidth / sliderSections.length;
        let slidePosition = -counter * slideWidth;
        slider.style.transform = `translateX(${slidePosition}px)`;
    }
});