let currentSlideIndex = 0;
const slides = document.getElementsByClassName("slide");
const slideInterval = 5000;
let autoSlideTimer;

// Initialize first slide
showSlide(currentSlideIndex);

function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        changeSlide(1);
    }, slideInterval);
}

function showSlide(index) {
    for (let slide of slides) {
        slide.classList.remove("active");
    }
    slides[index].classList.add("active");
}

function changeSlide(n) {
    clearInterval(autoSlideTimer);
    currentSlideIndex += n;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
    startAutoSlide();
}

// Swipe functionality for mobile
let startX;
const slider = document.getElementById("slider");

slider.addEventListener("touchstart", (e) => {
    clearInterval(autoSlideTimer);
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
    if (!startX) return;
    let endX = e.touches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) {
        changeSlide(1);
        startX = null;
    } else if (diff < -50) {
        changeSlide(-1);
        startX = null;
    }
});

slider.addEventListener("touchend", () => {
    setTimeout(startAutoSlide, slideInterval);
});

// Navigate to the second page with a flip animation
function goToNextPage() {
    const mainPage = document.getElementById('main-page');
    const secondPage = document.getElementById('second-page');

    // Add flip animation classes
    mainPage.classList.add('flip-forward');
    setTimeout(() => {
        mainPage.style.display = 'none';
        secondPage.style.display = 'block';
        secondPage.classList.add('flip-backward');
    }, 600);
}

// Navigate back to the main page with a flip animation
function goToMainPage() {
    const mainPage = document.getElementById('main-page');
    const secondPage = document.getElementById('second-page');

    // Add flip animation classes
    secondPage.classList.add('flip-forward');
    setTimeout(() => {
        secondPage.style.display = 'none';
        mainPage.style.display = 'block';
        mainPage.classList.add('flip-backward');
    }, 600);
}

startAutoSlide();
