function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// carrossel
const images = [
    "/assets/carrossel/sem-2.jpeg",
    "/assets/carrossel/sem-4.jpeg",
    "/assets/carrossel/sem-5-1.jpeg",
    "/assets/carrossel/sem-1.jpeg"
];

const imageElement = document.getElementById("carousel-image");
let currentIndex = 0;

function showImage(index) {
    imageElement.style.opacity = 0;
    setTimeout(() => {
        imageElement.src = images[index];
        imageElement.style.opacity = 1;
    }, 300); 
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextSlide, 4000);

