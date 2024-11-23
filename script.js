let currentSlide = 0;
const slidesContainer = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides; // Handle wrapping
    const offset = -currentSlide * 100; // Calculate offset
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto-slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
    showSlide(0); // Start at the first slide
});
