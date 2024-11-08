let currentSlideIndex = 0;
const slides = document.getElementsByClassName("slide");
const slideInterval = 5000; // Change slide every 5 seconds
let autoSlideTimer;

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

// Navigate to the second page with flip effect
function goToNextPage() {
    const mainPage = document.getElementById('main-page');
    const secondPage = document.getElementById('second-page');

    // Add flip animation class to main page
    mainPage.classList.add('page-flip');

    // Wait for animation to complete, then switch pages
    setTimeout(() => {
        mainPage.style.display = 'none';
        secondPage.style.display = 'block';
        mainPage.classList.remove('page-flip'); // Remove animation class
    }, 1000);  // Duration of the flip animation
}

// Navigate back to the main page with flip effect
function goToMainPage() {
    const mainPage = document.getElementById('main-page');
    const secondPage = document.getElementById('second-page');

    // Add flip animation class to second page
    secondPage.classList.add('page-flip');

    // Wait for animation to complete, then switch pages
    setTimeout(() => {
        mainPage.style.display = 'block';
        secondPage.style.display = 'none';
        secondPage.classList.remove('page-flip'); // Remove animation class
    }, 1000);  // Duration of the flip animation
}

startAutoSlide();  // Start the auto-slide initially
