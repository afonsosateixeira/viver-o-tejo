// Seleciona todos os slides
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Função para mostrar o slide atual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
  slides[index].classList.add('active');
}

// Inicia o slider
function startSlider() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000); // muda de slide a cada 5 segundos
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  startSlider();
});
