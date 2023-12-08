const button = document.getElementById('signUpButton')
const landing = document.getElementById('landing')
const container = document.getElementById('signUpContainer')

console.log();

button.addEventListener('click', () => {
    landing.style.display = "none"
    container.style.display = "block";

    history.pushState({ page: 'signup' }, '', '/signup');
    
});

// Handle back/forward navigation
window.addEventListener('popstate', (event) => {
    const state = event.state;

    if (state && state.page === 'signup') {
        // Update styles for signup
        landing.style.display = "none";
        container.style.display = "block";
    } else {
        // Update styles for other pages or initial state
        landing.style.display = "flex";
        container.style.display = "none";
    }
});