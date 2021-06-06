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

//when I click left, move slide to left
prevBtn.addEventListener('click', e => {
  const currentItem = carouselInner.querySelector('.current-item');
  const prevItem = currentItem.previousElementSibling;

  moveToSlide(carouselInner, currentItem, prevItem);
});

//when I click right, move slide right
nextBtn.addEventListener('click', e => {
  const currentItem = carouselInner.querySelector('.current-item');
  const nextItem = currentItem.nextElementSibling;
  moveToSlide(carouselInner, currentItem, nextItem);
  
});

//when I click nav indicator, move to that slide
dotsNav.addEventListener('click', e => {
  //what indicator was clicked on? 
  const targetDot = e.target.closest('button');
  
  if(!targetDot) return;

  const currentItem = carouselInner.querySelector('.current-item');
  const currentDot = dotsNav.querySelector('.current-item');
  const targetIndex = dots.findIndex(dot => dot === targetDot);

  console.log(targetIndex)
  
})