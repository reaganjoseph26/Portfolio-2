const carouselInner = document.querySelector('.carousel-inner');
const slides = Array.from(carouselInner.children);
const nextBtn = document.querySelector('.carousel-button-right');
const prevBtn = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const slidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px'
};
slides.forEach(slidePosition);

//when I click left, move slide to left

//when I click right, move slide right
nextBtn.addEventListener('click', e => {
  const currentItem = carouselInner.querySelector('.current-item');
  const nextItem = currentItem.nextElementSibling;
  const amountToMove = nextItem.style.left;

  // move to the next slide
  carouselInner.style.transform = 'translateX(-' + amountToMove +')';
  currentItem.classList.remove('current-item');
  nextItem.classList.add('current-item');
  
  
})

//when I click nav indicator, move to that slide