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

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");
const notFoundMessage = document.getElementById("notFoundMessage");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        updateGallery(filter, searchInput.value.toLowerCase());
    });
});

searchInput.addEventListener("input", () => {
    const filter = document
        .querySelector(".filter-btn.active")
        .getAttribute("data-filter");
    updateGallery(filter, searchInput.value.toLowerCase());
});

function updateGallery(subject, searchTerm) {
    let visibleCount = 0;

    cards.forEach((item) => {
        const matchesSubject =
            subject === "all" || item.dataset.subject === subject;
        const matchesSearch = item.dataset.title.toLowerCase().includes(searchTerm);

        const isVisible = matchesSubject && matchesSearch;
        item.style.display = isVisible ? "inline-block" : "none";
            // matchesSubject && matchesSearch ? "inline-block" : "none";
        
        if (isVisible) {
            visibleCount++;
        }
    });
    if (notFoundMessage) {
        notFoundMessage.style.display = visibleCount === 0 ? "block" : "none";
    }
}