
document.addEventListener('DOMContentLoaded', function() {
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slides');
let currentIndex = 0;

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    currentIndex = index;

    const translateX = -currentIndex * 33.33 + '%';
    slider.style.transform = `translateX(${translateX})`;
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

// Adicione event listeners para os botões de próxima e anterior
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);
});
