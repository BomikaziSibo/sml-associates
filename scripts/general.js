let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 3 seconds
}

showSlides();


const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.nav-menu');

burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
  burgerBtn.setAttribute('aria-expanded', !isExpanded);
});

