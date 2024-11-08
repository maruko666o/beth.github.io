// Existing slide carousel logic
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

startAutoSlide();

// Page flip animation setup
const flipSound = new Audio('flip.mp3');  // Assuming "flip.mp3" is in the same directory

// Get references to both pages
const mainPage = document.getElementById('main-page');
const secondPage = document.getElementById('second-page');

// Function to go to the next page with flip animation
function goToNextPage() {
    // Play flip sound
    flipSound.play();

    // Hide main page and show second page with flip animation
    mainPage.style.display = 'none';
    secondPage.classList.add('page-flip');
    secondPage.style.display = 'block';
}

// Function to go back to the main page
function goToMainPage() {
    // Play flip sound
    flipSound.play();

    // Flip second page back
    secondPage.classList.remove('page-flip');
    secondPage.classList.add('page-flip-back');

    // Wait for flip animation to complete before showing the main page
    setTimeout(function() {
        secondPage.style.display = 'none';
        mainPage.style.display = 'block';
    }, 1000);  // Duration of the flip animation (1s)
}

// Event listener for going to next page
document.getElementById('next-button').addEventListener('click', goToNextPage);

// Event listener for going back to main page
document.getElementById('back-button').addEventListener('click', goToMainPage);
