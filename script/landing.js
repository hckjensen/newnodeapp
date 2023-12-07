const button = document.getElementById('signUpButton')
const landing = document.getElementById('landing')
const container = document.getElementById('signUpContainer')

console.log();

button.addEventListener('click', () => {
    landing.style.display = "none"
    container.style.display = "block"
})