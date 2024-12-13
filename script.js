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


function openBooking() {
    // Show the booking modal
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'flex'; // Use flex to center the content
}

function closeBooking() {
    // Hide the booking modal
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
}
function toggleMobileNav() {
    const mobileNav = document.getElementById("mobileNav");
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
}
