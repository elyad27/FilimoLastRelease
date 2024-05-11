// function same name like modular name
async function cinemaOnline() {
    
    let contents ="";
    
    try {
        
      let data = await fetch("https://elyad27.github.io/database/db.json");
      let res = await data.json();
      // let data2 = await fetch("https://elyad27.github.io/database/db.json");
      // let res2 = await data.json();




      let [bgImage] = res.cinemaOnline.splice(0,1);
      
      document.querySelector(".cinemaOnline").style.backgroundImage = "url('../../images/cinemaOnlineBg.webp')";
      
      let [topContent] = res.cinemaOnline;
      
      document.querySelector(".cinemaOnline .boxInside .top").insertAdjacentHTML("afterbegin" , topContent.content);
        
      contents = res.cinemaOnlineContents.map((el) => {
        
        return `<div class="item bg-[#ffffff0f] relative box-content w-[100%] sm:w-[80%] 2xl:w-[506px] h-[224px] p-[10px] m-[12px] border-[1px] border-[#33353d] rounded-[12px] flex flex-row">${el.content}</div>`;
      }).join('');
      

      
      
      document.querySelector(".cinemaOnline .boxInside .bottom").insertAdjacentHTML("afterbegin" , contents);
      
  
    } catch (error) {
      console.log(error.mesaage);
    }
  
  
      
    }
    
    export default cinemaOnline;
    
    
    
    
    
    