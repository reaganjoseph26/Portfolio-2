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

const moveToSlide = (carouselInner, currentItem, targetItem) => {
  carouselInner.style.transform = 'translateX(-' + targetItem.style.left; +')';
  currentItem.classList.remove('current-item');
  targetItem.classList.add('current-item');
  
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

//when I click left, move slide to left
prevBtn.addEventListener('click', e => {
  const currentItem = carouselInner.querySelector('.current-item');
  const prevItem = currentItem.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide')
  const prevDot = currentDot.previousElementSibling;
  moveToSlide(carouselInner, currentItem, prevItem);
  updateDots(currentDot, prevDot);
});

//when I click right, move slide right
nextBtn.addEventListener('click', e => {
  const currentItem = carouselInner.querySelector('.current-item');
  const nextItem = currentItem.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide')
  const nextDot = currentDot.nextElementSibling;

  moveToSlide(carouselInner, currentItem, nextItem);
  updateDots(currentDot, nextDot)
});

//when I click nav indicator, move to that slide
dotsNav.addEventListener('click', e => {
  //what indicator was clicked on? 
  const targetDot = e.target.closest('button');
  
  if(!targetDot) return;

  const currentItem = carouselInner.querySelector('.current-item');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetItem = slides[targetIndex];

  moveToSlide(carouselInner, currentItem, targetItem);
  updateDots(currentDot, targetDot)

  
})