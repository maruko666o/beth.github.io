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
