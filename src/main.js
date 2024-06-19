
let colorTheme = document.getElementById('color-theme');
let body = document.querySelector('body')

colorTheme.addEventListener('click', () => {
    colorTheme.classList.toggle('dark')
    body.classList.toggle('dark')
});