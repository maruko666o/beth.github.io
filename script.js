// Carousel functionality
let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Set interval for automatic slide change
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Function to switch to the second page
function goToNextPage() {
    document.getElementById("main-page").style.opacity = 0; // Fade out main page
    setTimeout(function() {
        document.getElementById("main-page").style.display = "none"; // Hide main page
        document.getElementById("second-page").style.display = "block"; // Show second page
        setTimeout(function() {
            document.getElementById("second-page").style.opacity = 1; // Fade in second page
        }, 10); // Short delay for smooth transition
    }, 500); // Delay to allow opacity transition
}

// Function to go back to the main page
function goToMainPage() {
    document.getElementById("second-page").style.opacity = 0; // Fade out second page
    setTimeout(function() {
        document.getElementById("second-page").style.display = "none"; // Hide second page
        document.getElementById("main-page").style.display = "block"; // Show main page
        setTimeout(function() {
            document.getElementById("main-page").style.opacity = 1; // Fade in main page
        }, 10); // Short delay for smooth transition
    }, 500); // Delay to allow opacity transition
}

// Initial slide display
showSlide(currentSlideIndex);
