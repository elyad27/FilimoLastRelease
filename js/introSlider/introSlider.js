async function introSlider(){
      
  let slides="";
  let text ="";
  try {
    let data = await fetch("https://elyad27.github.io/database/db.json");
    let res = await data.json();
    // let data1 = await fetch("https://elyad27.github.io/database/db.json");
    // let res1 = await data1.json();
    slides = res.introSlides.map((el) => {
      return `<div class="swiper-slide"><img src="${el.link}" alt="slide_${el.id}"></div>`;
    }).join('');
    
    text = res.introText.map((el1) => {
      return `<div class="${el1.divClass}">${el1.content}</div>`;
    }).join('');

    document.querySelector(".introSlider .swiper-wrapper").insertAdjacentHTML("beforeend" , slides);
    document.querySelector(".introSlider .text").insertAdjacentHTML("beforeend" , text);
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

    var swiper1 = new Swiper(".mySwiper1" , {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
  } catch (error) {
    console.log(error.mesaage);
  }
};

export default introSlider;