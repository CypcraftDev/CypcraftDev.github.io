document.querySelectorAll('.carousel').forEach((carousel) => {
    const carouselImages = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function slideCarousel(direction) {
        if (direction === 'left') {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.length - 1;
        } else if (direction === 'right') {
            currentIndex = (currentIndex < carouselImages.length - 1) ? currentIndex + 1 : 0;
        }
        showImage(currentIndex);
    }

    let startX, endX;

    // Événements tactiles pour les appareils mobiles
    carousel.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX; // Position de départ
    });

    carousel.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].clientX; // Position de fin
        if (startX > endX + 50) { // Swipe gauche
            slideCarousel('right');
        } else if (startX < endX - 50) { // Swipe droite
            slideCarousel('left');
        }
    });

    // Événements de la souris pour les ordinateurs
    let isMouseDown = false;

    carousel.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        startX = event.clientX; // Position de départ de la souris
    });

    carousel.addEventListener('mouseup', (event) => {
        if (!isMouseDown) return;
        isMouseDown = false;
        endX = event.clientX; // Position de fin de la souris
        if (startX > endX + 50) { // Swipe gauche avec la souris
            slideCarousel('right');
        } else if (startX < endX - 50) { // Swipe droite avec la souris
            slideCarousel('left');
        }
    });

    carousel.addEventListener('mouseleave', () => {
        isMouseDown = false; // Arrête le glissement si la souris quitte le carrousel
    });
    
    carousel.addEventListener('click', () => {
       slideCarousel('right'); 
    });

    // Initialiser le carrousel
    showImage(currentIndex);
});
