const slides = document.querySelectorAll('.carrossel-slide');
const botaoCarrossel = document.getElementById('botao-carrossel');
let indiceAtual = 0;

botaoCarrossel.addEventListener('click', () => {
    if (indiceAtual < slides.length - 1) {
        indiceAtual++;
        document.querySelector('.carrossel-slides').style.transform = `translateX(-${indiceAtual * (100 + parseFloat(getComputedStyle(slides[indiceAtual]).marginRight) / parseFloat(getComputedStyle(slides[indiceAtual]).width) * 100)}%)`;
    } else {
        window.location.href = 'home.html';
    }
});