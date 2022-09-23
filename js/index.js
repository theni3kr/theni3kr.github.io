const navToggle =document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const date = document.getElementById('date')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
} )

const currentYear = new Date().getFullYear()
date.textContent = currentYear