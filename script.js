
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
window.onload = function() {
    // Show the pop-up after 2 seconds of page load
    setTimeout(() => {
        var popup = document.getElementById("cookie-popup");
        var body = document.body;
        if (popup && body) {
            popup.style.display = "block";
            // Apply the blur effect to the background (not 
        }
    }, 2000); // Adjust the delay as needed
};

// Close the pop-up and remove blur effect when the button is clicked
function closePopup() {
    var popup = document.getElementById("cookie-popup");
    var body = document.body;
    if (popup && body) {
        popup.style.display = "none";
        // Remove the blur effect from the background
        body.classList.remove("blur-background");
    }
}

function playFlipSound() {
    const flipSound = document.getElementById('flip-sound');
    flipSound.play();
}

// JavaScript to handle sound and animation
window.addEventListener('DOMContentLoaded', () => {
    const backgroundSound = document.getElementById('backgroundSound');
    const soundAnimation = document.getElementById('soundAnimation');

    // Play sound when page loads
    backgroundSound.play();
backgroundSound.playbackRate = 1.5;
    // Start sound animation when sound is playing
    backgroundSound.addEventListener('play', () => {
        soundAnimation.style.display = 'flex';
    });

    // Hide sound animation when sound is paused
    backgroundSound.addEventListener('pause', () => {
        soundAnimation.style.display = 'none';
    });
});

// JavaScript to handle sound and animation
// Play the sound after the website loads or on user interaction
window.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("fuwaru.mp3");
    audio.loop = false; // Ensures the sound loops
    audio.play().catch(error => {
        console.log("Audio playback requires user interaction.");
    });

    // Sound animation setup
    const soundAnimationContainer = document.getElementById("soundAnimation");
    const barCount = 20; // Number of bars you want in the animation

    // Create bars dynamically
    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.setProperty("--i", i); // Apply a unique animation delay for each bar
        soundAnimationContainer.appendChild(bar);
    }

    // Start sound playback on first user interaction if autoplay is blocked
    document.body.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        }
    });
});

function playMusic() {
            // Create an audio object and play the music
            var audio = new Audio('yiruma.mp3');
            audio.autoplay = true;
            audio.loop = true;
            audio.play();
        }

// Number of petals to create
const numPetals = 25;
const petalsContainer = document.getElementById('petals-container');

// Function to generate a random number within a range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a petal with random properties
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Set random left position
    const leftPosition = getRandom(0, 100);
    petal.style.left = `${leftPosition}%`;

    // Set random animation delay and duration
    const animationDelay = getRandom(0, 3) + 's'; // Random delay up to 3 seconds
    const animationDuration = getRandom(5, 8) + 's'; // Random duration between 5-8 seconds
    petal.style.animationDelay = animationDelay;
    petal.style.animationDuration = animationDuration;

    // Append the petal to the container
    petalsContainer.appendChild(petal);
}

// Create the petals
for (let i = 0; i < numPetals; i++) {
    createPetal();
}
startAutoSlide();
