// Navigate to the second page with flip animation
function goToNextPage() {
    const mainPage = document.getElementById('main-page');
    const secondPage = document.getElementById('second-page');

    // Add the flip animation class
    mainPage.classList.add('page-flip');

    // Wait for the animation to finish, then switch pages
    setTimeout(() => {
        mainPage.style.display = 'none';
        secondPage.style.display = 'block';
        secondPage.classList.add('page-flip');
    }, 800); // Delay matches animation duration
}

// Navigate back to the main page with flip animation
function goToMainPage() {
    const mainPage = document.getElementById('main-page');
    const secondPage = document.getElementById('second-page');

    // Add the flip animation class
    secondPage.classList.add('page-flip');

    // Wait for the animation to finish, then switch pages
    setTimeout(() => {
        secondPage.style.display = 'none';
        mainPage.style.display = 'block';
        mainPage.classList.add('page-flip');
    }, 800); // Delay matches animation duration
}
