let currentSlide = 0;
showSlide(currentSlide);

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        currentSlide = 0;
    } 
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[currentSlide].style.display = "block";
}