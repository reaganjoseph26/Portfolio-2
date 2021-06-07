let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to(".jennifer", 3, {y: -300}, '-=3')
.to('.content', 3, {top: '0%'}, '-=3')
// .fromTo(".content-images", 2, {opacity: 0}, {opacity: 1})

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller)





// const carouselInner = document.querySelector('.carousel-inner');
// const slides = Array.from(carouselInner.children);
// const nextBtn = document.querySelector('.carousel-button-right');
// const prevBtn = document.querySelector('.carousel-button-left');
// const dotsNav = document.querySelector('.carousel-nav');
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// const slidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + 'px'
// };
// slides.forEach(slidePosition);

// const moveToSlide = (carouselInner, currentItem, targetItem) => {
//   carouselInner.style.transform = 'translateX(-' + targetItem.style.left; +')';
//   currentItem.classList.remove('current-item');
//   targetItem.classList.add('current-item');
  
// }

// const updateDots = (currentDot, targetDot) => {
//   currentDot.classList.remove('current-slide');
//   targetDot.classList.add('current-slide');
// }

// const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
//   if(targetIndex === 0) {
//     prevBtn.classList.add('is-hidden');
//     nextBtn.classList.remove('is-hidden')
//   } else if (targetIndex === slides.length -1){
//       prevBtn.classList.remove('is-hidden');
//       nextBtn.classList.add('is-hidden');
//   } else {
//     prevBtn.classList.remove('is-hidden');
//     nextBtn.classList.remove('is-hidden');
//   }
// }

// //when I click left, move slide to left
// prevBtn.addEventListener('click', e => {
//   const currentItem = carouselInner.querySelector('.current-item');
//   const prevItem = currentItem.previousElementSibling;
//   const currentDot = dotsNav.querySelector('.current-slide')
//   const prevDot = currentDot.previousElementSibling;
//   const prevIndex = slides.findIndex(slide => slide === prevItem)

//   moveToSlide(carouselInner, currentItem, prevItem);
//   updateDots(currentDot, prevDot);
//   hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
// });

// //when I click right, move slide right
// nextBtn.addEventListener('click', e => {
//   const currentItem = carouselInner.querySelector('.current-item');
//   const nextItem = currentItem.nextElementSibling;
//   const currentDot = dotsNav.querySelector('.current-slide')
//   const nextDot = currentDot.nextElementSibling;
//   const nextIndex = slides.findIndex(slide => slide === nextItem)

//   moveToSlide(carouselInner, currentItem, nextItem);
//   updateDots(currentDot, nextDot)
//   hideShowArrows(slides, prevBtn, nextBtn, nextIndex);

// });

// //when I click nav indicator, move to that slide
// dotsNav.addEventListener('click', e => {
//   //what indicator was clicked on? 
//   const targetDot = e.target.closest('button');
  
//   if(!targetDot) return;

//   const currentItem = carouselInner.querySelector('.current-item');
//   const currentDot = dotsNav.querySelector('.current-slide');
//   const targetIndex = dots.findIndex(dot => dot === targetDot);
//   const targetItem = slides[targetIndex];

//   moveToSlide(carouselInner, currentItem, targetItem);
//   updateDots(currentDot, targetDot);
//   hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
  
// })