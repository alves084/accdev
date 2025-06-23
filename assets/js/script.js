
document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;

  const sliderContainer = document.querySelector(".banner .sliders");
  const slides = document.querySelectorAll(".banner .slide");
  const pointers = document.querySelectorAll(".banner .pointers");
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");
  const menuOpener = document.querySelector(".menu-opener");
  const nav = document.querySelector("nav");
  const header = document.querySelector(".header");
  const splash = document.getElementById("splash-screen");
  const closeBtn = document.getElementById("close-splash");

  // --- SLIDER ---
  const setSliderWidth = () => {
    sliderContainer.style.width = `${100 * slides.length}vw`;
  };

  const showSlide = (index) => {
    const slideWidth = window.innerWidth;
    sliderContainer.style.marginLeft = `-${slideWidth * index}px`;

    pointers.forEach((pointer, i) =>
      pointer.classList.toggle("active", i === index)
    );
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  setSliderWidth();
  let slideInterval = setInterval(nextSlide, 5000);

  sliderContainer.addEventListener("mouseenter", () => clearInterval(slideInterval));
  sliderContainer.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000);
  });

  pointers.forEach((pointer, i) => {
    pointer.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  leftArrow?.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  rightArrow?.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // --- MENU MOBILE ---
  menuOpener?.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  // --- HEADER SCROLL ---
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // --- SPLASH SCREEN ---
  closeBtn?.addEventListener("click", () => {
    splash.style.opacity = "0";
    setTimeout(() => {
      splash.style.display = "none";
    }, 500);
  });

  // --- SWIPE SLIDE (MOBILE) ---
  let startX = 0, startY = 0, endX = 0, endY = 0;

  sliderContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  sliderContainer.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    handleSwipe();
  });

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < -swipeThreshold) {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      } else if (diffX > swipeThreshold) {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }
    }
  };
});
