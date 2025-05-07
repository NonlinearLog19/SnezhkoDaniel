const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const filterButtons = document.querySelectorAll('.filter_btn');
const portfolioItems = document.querySelectorAll('.portfolio_item');
const galleryImages = document.querySelectorAll('.gallery_img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox_img');
const lightboxClose = document.querySelector('.lightbox_close');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
            } else if (item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Special handling for events
        if (filter === 'events') {
            const eventsItem = document.querySelector('.portfolio_item.events');
            if (eventsItem) {
                eventsItem.style.display = 'flex';
            }
        }
    });
});

// Lightbox functionality
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});