// function same name like modular name
async function freeContent() {
    
  let slides ="";

  try {
    let data = await fetch("https://elyad27.github.io/database/db.json");
    let res = await data.json();

    let [topic] = res.freeContent.splice(0,1);
    
    document.querySelector(".freeContent .inside .topic span").setAttribute("class" , topic.divClass)
    document.querySelector(".freeContent .inside .topic span").innerHTML = `${topic.content}`;

    slides = res.freeContent.map((el) => {
     
      
      return `<a href="#" class="swiper-slide flex flex-col gap-y-2 w-full h-full items-center relative">
      <div class="freeIcon py-1 px-2 flex flex-row justify-center items-center gap-x-1 rounded-[24px] bg-[#1d2b1f] absolute right-[calc(50%-75px)] top-1 z-20">
        <img src="./icon/free_freeContent.svg" alt="freeIcon">
        <span class="text-[#3B964F] font-mine text-[11px] font-normal">رایگان</span>
      </div>
      <div class="img w-[165px] h-[220px]">
        <img class="object-cover rounded-[10px] opacity-70" src='${el.src}' alt="free${el.id}">
      </div>
      <p class="title text-[#CFCFCF] font-mine font-normal text-[13px] mx-auto  ">${el.title}</p>
    </a>`;
    }).join('');
 
    document.querySelector(".freeContent .inside .swiper-wrapper").insertAdjacentHTML("beforeend" , slides);
    

  } catch (error) {
    console.log(error.mesaage);
  }


    var swiper = new Swiper(".mySwiperFreeContent", {
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
            
          
          476:{
            slidesPerView: 2,
            spaceBetween: 10
           },
          700:{
            slidesPerView: 3,
            spaceBetween: 10
           },
          
          1000:{
            slidesPerView: 4,
            spaceBetween: 10
           },
          
          1500:{
            slidesPerView: 5,
            spaceBetween: 10
           },
           1800:{
            slidesPerView: 6,
            spaceBetween: 10
           },
           

          
  
        }
      });
  }
  
  export default freeContent;
  
  
  
  
  
  