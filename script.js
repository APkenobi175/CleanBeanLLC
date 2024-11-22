let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slideshow-image");
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slideshow-image");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

function toggleMenu() {
    alert("Menu coming soon");
}

// Initialize the first slide
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});
