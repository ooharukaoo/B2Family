const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
let menuOpen = false;

hamburger.addEventListener("click", () => {
    if (menuOpen == false) {
        navLinks.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const photos = document.querySelectorAll('.photo');

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.remove('fade-out');
        lightbox.classList.add('fade-in');
        lightbox.style.display = 'flex';
    }

    function closeLightbox() {
        lightbox.classList.remove('fade-in');
        lightbox.classList.add('fade-out');
        setTimeout(() => {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }, 300);
    }

    photos.forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src));
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-img')) {
            closeLightbox();
        }
    });
});