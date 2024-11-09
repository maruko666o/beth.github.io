
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
    currentSlideIndex += n;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
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
    startAutoSlide(); // Resume auto-slide after swipe
});

// Navigate to the second page
// Function to navigate to the second page (book opening animation)
// Variables for detecting swipe
// Variables for detecting swipe
// Variables for detecting swipe
// Function to navigate to the second page (book opening animation)
function goToNextPage() {
    const mainPage = document.getElementById('main-page');
    const secondPage = document.getElementById('second-page');
    
    // Apply "book opening" animation to the main page and transition to the second page
    mainPage.style.animation = 'closeBook 1s forwards'; // Apply book closing animation to the main page
    setTimeout(() => {
        mainPage.style.display = 'none'; // Hide main page after animation
        secondPage.style.display = 'block'; // Show second page after transition
        secondPage.style.animation = 'openBook 1s forwards'; // Apply book opening animation to the second page
    }, 1000); // Wait for the "closeBook" animation to finish before hiding the main page
}

// Function to navigate back to the main page (book closing animation)
function goToMainPage() {
    const mainPage = document.getElementById('main-page');
    const secondPage = document.getElementById('second-page');
    
    // Apply "book closing" animation to the second page and transition to the main page
    secondPage.style.animation = 'closeBook 1s forwards'; // Apply book closing animation to the second page
    setTimeout(() => {
        secondPage.style.display = 'none'; // Hide second page after animation
        mainPage.style.display = 'block'; // Show main page after transition
        mainPage.style.animation = 'openBook 1s forwards'; // Apply book opening animation to the main page
    }, 1000); // Wait for the "closeBook" animation to finish before hiding the second page
}

// Show the love pop-up after the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Show the love pop-up after the page loads
    const lovePopup = document.getElementById('love-popup');
    lovePopup.style.display = 'block'; // Show the pop-up when the page loads

    // Function to close the pop-up when the button is clicked
    function closePopup() {
        lovePopup.style.display = 'none'; // Hide the pop-up
    }

    // Attach the closePopup function to the button
    const closeButton = lovePopup.querySelector("button");
    closeButton.addEventListener("click", closePopup);
});

startAutoSlide();
