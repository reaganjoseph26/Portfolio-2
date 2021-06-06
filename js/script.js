require("bootstrap");
const img1 = require("../assets/images/movie-hunt.jpg");
const img2 = require("../assets/images/movie-hunt.jpg");

$(document).ready(function() {
  

const carouselSlides = [
    {
      title: "Exmaple",
      subtitle: "Example",
      img: img1,
      btnText: "Example",
      btnUrl: "https://reaganjoseph26.github.io/Portfolio/#Projects"
    },
    {
      title: "Our food is seriously the bomb!",
      subtitle: "What are you waiting for?",
      img: img2,
      btnText: "Purchase Tickets",
      btnUrl: "https://reaganjoseph26.github.io/Portfolio/#Projects"
    },
  ]

carouselSlides.forEach((slide, i) => {
    $('.carousel-inner').append(`
  <div class="carousel-item" style="background-image: url('${slide.img}')">
    <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
        <div class="container">
          <div class="row align-items-center justify-content-center">
              <h2 class="display-4 mb-2">${slide.title}</h2>
          </div>
          <div class="row align-items-center justify-content-center"> 
            <h3>${slide.subtitle}</h3>
          </div>
          <div class=" mt-4 row align-items-center justify-content-center"> 
            <a class="btn btn-primary" href="${slide.btnUrl}">
                ${slide.btnText}
            </a>
          </div>
        </div>
    </div>
  </div>`)
  })
})
