async function bestOf() {



  let bestOfitems="";
  try {
    let data = await fetch("https://elyad27.github.io/database/db.json");
    let res = await data.json();
    bestOfitems=res.bestOfItems.map((el) => {
      return `<div class="${el.divClass}">${el.content}</div>`;
    }).join('');

    document.querySelector(".bestOf").insertAdjacentHTML("beforeend" , bestOfitems);
}
catch (error) {
  console.log(error.mesaage);
}










  let serieKey = document.querySelector(".bestOf .topBestOf .switch .series");
  let filmKey = document.querySelector(".bestOf .topBestOf .switch .film");
  
  let seriesM_Block = document.querySelector(".bestOf .bottomBestOf");
  let filmsM_Block = document.querySelector(".bestOf .bottomBestOf2");
  
  let seriesM = document.querySelectorAll(".bestOf .bottomBestOf div");
  let filmsM = document.querySelectorAll(".bestOf .bottomBestOf2 div");

  let seriesList = document.querySelector(".bestOf .seriesList");
  let filmList = document.querySelector(".bestOf .filmList");

  let seriesLists = document.querySelectorAll(".bestOf .seriesList a");
  let filmsLists = document.querySelectorAll(".bestOf .filmList a");

  let detailSeries = document.querySelector(".bestOf .detailSeries");
  let detailFilms = document.querySelector(".bestOf .detailFilms");
  
  let detailSeriesM = document.querySelectorAll(".bestOf .detailSeries >div");
  let detailFilmsM = document.querySelectorAll(".bestOf .detailFilms >div");
  
  
  serieKey.addEventListener("click", () => {
    setTimeout(() => {
      seriesList.classList.remove("hidden");
      filmList.classList.add("hidden");
      filmKey.classList.add("bg-[#313131]");
      filmKey.classList.remove("bg-[#313131]");
      serieKey.classList.remove("bg-transparent");
      serieKey.classList.add("bg-[#313131]");
      seriesM_Block.classList.remove("hidden");
      filmsM_Block.classList.add("hidden");
      detailSeries.classList.remove("hidden");
      detailFilms.classList.add("hidden");
    }, 500);
  });
  filmKey.addEventListener("click", () => {
    setTimeout(() => {
      seriesList.classList.add("hidden");
      filmList.classList.remove("hidden");
      serieKey.classList.remove("bg-[#313131]");
      filmKey.classList.remove("bg-transparent");
      filmKey.classList.add("bg-[#313131]");
      seriesM_Block.classList.add("hidden");
      filmsM_Block.classList.remove("hidden");
      detailSeries.classList.add("hidden");
      detailFilms.classList.remove("hidden");

    }, 500);
  });
  seriesLists.forEach((el,item)=>{
   
    
    el.addEventListener("click",()=>{
        seriesLists.forEach((el1)=>{
            el1.classList.remove("scale-110");
            el1.classList.remove("border-2");
            el1.classList.add("opacity-50");
        });

        el.classList.add("scale-110");
        el.classList.add("border-2");
        el.classList.remove("opacity-50");
    

        seriesM.forEach((el2,item2)=>{
            
           if (item === item2) {
            el2.classList.remove("hidden");
           }else{
            el2.classList.add("hidden");
           }
        })
        detailSeriesM.forEach((el3,item3)=>{
            
          if (item === item3) {
           el3.classList.remove("hidden");
          }else{
           el3.classList.add("hidden");
          }
       })
       

    })
  })
  filmsLists.forEach((el,item)=>{
   
    
    el.addEventListener("click",()=>{
        filmsLists.forEach((el1)=>{
            el1.classList.remove("scale-110");
            el1.classList.remove("border-2");
            el1.classList.add("opacity-50");
        });

        el.classList.add("scale-110");
        el.classList.add("border-2");
        el.classList.remove("opacity-50");
    

        filmsM.forEach((el2,item2)=>{
            
           if (item === item2) {
            el2.classList.remove("hidden");
           }else{
            el2.classList.add("hidden");
           }
        })
        detailFilmsM.forEach((el3,item3)=>{
            
          if (item === item3) {
           el3.classList.remove("hidden");
          }else{
           el3.classList.add("hidden");
          }
       })
    })
  })






  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is <= 499px
     400:{
      slidesPerView: 2,
      spaceBetween: 40
     },

      1000: {
          slidesPerView: 4,
          spaceBetween: 40
      }
      
  }
  });
}
export default bestOf;



