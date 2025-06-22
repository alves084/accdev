
document.addEventListener("DOMContentLoaded", function () {
    // SLIDER AUTOMÁTICO
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner .slide');
    const sliderContainer = document.querySelector('.banner .sliders');
    const pointers = document.querySelectorAll('.banner .pointers');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    // Ajusta largura automaticamente com base no número de slides
    sliderContainer.style.width = `${100 * slides.length}vw`;

    function showSlide(index) {
        const slideWidth = window.innerWidth;
        sliderContainer.style.marginLeft = `-${slideWidth * index}px`;

        pointers.forEach((pointer, i) => {
            pointer.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    let slideInterval = setInterval(nextSlide, 5000); // troca automática a cada 5s

    // Pausa ao passar o mouse
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Clique nos ponteiros
    pointers.forEach((pointer, i) => {
        pointer.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
        });
    });

    // Clique nas setas
    leftArrow.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    rightArrow.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // MENU MOBILE
    const menuOpener = document.querySelector('.menu-opener');
    const nav = document.querySelector('nav');

    menuOpener.addEventListener('click', () => {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    });
    //header scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    //splash screen
    const splash = document.getElementById('splash-screen');
    const closeBtn = document.getElementById('close-splash');

    closeBtn.addEventListener('click', () => {
    splash.style.opacity = '0';
    setTimeout(() => {
        splash.style.display = 'none';
    }, 500);
    });

    //showSlide
    let startX = 0;
    let endX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    sliderContainer.addEventListener('touchmove', (e) => {
        e.preventDefault(); // evita rolagem lateral no mobile
    }, { passive: false });

    sliderContainer.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;

        if (endX < startX - swipeThreshold) {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        } else if (endX > startX + swipeThreshold) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    }


});
