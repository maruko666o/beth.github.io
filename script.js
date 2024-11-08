let currentSlideIndex = 0;
const slides = document.getElementsByClassName("slide");
const slideInterval = 5000; // Change slide every 5 seconds
let autoSlideTimer;
const mainPage = document.getElementById('main-page');
const secondPage = document.getElementById('second-page');
const pageFlip = document.getElementById('main-page').querySelector('.container'); // Flip container

// Initialize first slide
showSlide(currentSlideIndex);

// Auto slide function
function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        changeSlide(1);
    }, slideInterval);
}

// Show the selected slide
function showSlide(index) {
    for (let slide of slides) {
        slide.classList.remove("active");
    }
    slides[index].classList.add("active");
}

// Manually change slides
function changeSlide(n) {
    clearInterval(autoSlideTimer);  // Pause auto-slide when user manually changes slide
    currentSlideIndex += n;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
    startAutoSlide();  // Restart auto-slide after manual change
}

// Swipe functionality for mobile
let startX;
const slider = document.getElementById("slider");

slider.addEventListener("touchstart", (e) => {
    clearInterval(autoSlideTimer); // Pause auto-slide on swipe
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
    // Start auto-slide again after swipe ends
    setTimeout(startAutoSlide, slideInterval);
});

// Navigate to the second page with a page flip animation
function goToNextPage() {
    pageFlip.classList.add('flip'); // Add flip class to trigger animation

    setTimeout(() => {
        mainPage.style.display = 'none';
        secondPage.style.display = 'block';
        pageFlip.classList.remove('flip'); // Reset flip animation after the transition
    }, 800); // Wait for the flip animation duration before changing pages
}

// Navigate back to the main page with a page flip animation
function goToMainPage() {
    pageFlip.classList.add('flip'); // Add flip class to trigger animation

    setTimeout(() => {
        mainPage.style.display = 'block';
        secondPage.style.display = 'none';
        pageFlip.classList.remove('flip'); // Reset flip animation after the transition
    }, 800); // Wait for the flip animation duration before changing pages
}

startAutoSlide();  // Start the auto-slide initially
