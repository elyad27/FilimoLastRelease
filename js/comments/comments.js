async function comments(){
     
  let contents ="";
    
  try {
      
    let data = await fetch("https://elyad27.github.io/database/db.json");
    let res = await data.json();
    
    let [top] = res.comments.slice(0,1);
    
    
    document.querySelector(".comments .inside .top").insertAdjacentHTML("afterbegin" , top.content);
    
    

    contents = res.comments.map((el) => {
      if(el.id>0){
        return `<div class="swiper-slide p-6 bg-[#ffffff05] border-[1px] border-[#33353d] rounded-xl flex-col">
        <div class="top w-full h-[34px] mb-4 flex flex-row justify-between items-start">
          <div class="user flex flex-row gap-x-2">
            <div class="w-[24px] h-[24px] "><img class="object-cover" src="./images/userPhoto_comment.webp" alt="profile"></div>
            <span class="text-[#959ba2] text-[15px] font-mine "> ${el.name}</span>
          </div>
          <div class="w-[40px] h-[34px]">
            <img class="object-cover" src="./images/comentLogo_comments.webp" alt="commentLogo">
          </div>
         
        </div>
        <div class="comment mb-4 w-full overflow-x-auto h-[75px]">
          <p class="font-mine text-[12px] font-normal text-[#F9F9F9]">
               ${el.comment}</p>
        </div>
      </div>`;
      }
      
    }).join('');
    document.querySelector(".comments .inside .swiper-wrapper").insertAdjacentHTML('beforeend' , contents);










    let nextkey1= document.querySelector("#nextt");
    let nextkey2= document.querySelector("#nexttt");
    let prevkey1= document.querySelector("#prevv");
    let prevkey2= document.querySelector("#prevvv");

    nextkey1.addEventListener("click" ,()=>{
      nextkey2.click();
    });
    prevkey1.addEventListener("click" ,()=>{
      prevkey2.click();
    });

    var swiper = new Swiper(".mySwiperComments", {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
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
         560:{
          slidesPerView: 2,
          spaceBetween: 15
         },
    
          1000: {
              slidesPerView: 3,
              spaceBetween: 15
          }
          
      }
      });
   

  } catch (error) {
    console.log(error.mesaage);
  }








  
   
   
  };
  
  export default comments;