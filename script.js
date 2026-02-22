// Selecionamos os elementos do HTML necessários para o carrossel
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Contador para sabermos em qual imagem estamos
let counter = 0;
// Pegamos a largura exata da imagem para saber o quanto devemos deslizar
const size = carouselImages[0].clientWidth;

// Função para avançar a imagem
nextBtn.addEventListener('click', () => {
    // Se o contador chegar na última imagem, ele não faz nada (evita erro)
    if (counter >= carouselImages.length - 1) return;

    // Aumentamos o contador e movemos o carrossel usando a propriedade CSS 'transform'
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Função para voltar a imagem
prevBtn.addEventListener('click', () => {
    // Se estivermos na primeira imagem, ele não volta mais
    if (counter <= 0) return;

    // Diminuímos o contador e movemos de volta
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Extra: Para garantir que o carrossel não quebre se o usuário girar o celular (redimensionar a tela)
window.addEventListener('resize', () => {
    // Recalcula o tamanho da imagem e ajusta a posição
    const newSize = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
});

// Selecionamos os elementos do menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Quando clicar no botão hamburguer, ele abre ou fecha o menu lateral
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Transforma em X
    navMenu.classList.toggle('active');   // Desliza o menu
});

// Quando o usuário clicar em um link (ex: "Quem Sou"), o menu fecha automaticamente
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});