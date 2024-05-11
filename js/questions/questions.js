async function questions() {
    let contents = "";
    try{

      let data = await fetch("https://elyad27.github.io/database/db.json");
      let res = await data.json();
      let [topic] = res.questions.slice(0,1);
      document.querySelector(".questions .insideBox h2").insertAdjacentHTML("afterbegin" , topic.h2Text);
      document.querySelector(".questions .insideBox p").insertAdjacentHTML("afterbegin" , topic.pText);
      
      res.questions.shift();
      
      contents = res.questions.map((el) => {
        
          return `<div class="item w-full rounded-xl p-4 border-[1px] border-[#33353d] bg-[#ffffff05]">${el.content}</div>`;
        
      }).join('');
      document.querySelector(".questions .insideBox .akordiyon").insertAdjacentHTML('beforeend' , contents);


      let openKeys = document.querySelectorAll(
        ".questions .insideBox .akordiyon .item .top"
      );
    
      openKeys.forEach((elem) => {
        let flag = 0;
    
        elem.addEventListener("click", () => {
          let topic = elem.querySelector("h3");
          
          let plusImg = elem.querySelector("a img");
            
          if (flag === 0) {
            elem.nextElementSibling.classList.remove("hidden");
            topic.style.color = "#f4843f";
            plusImg.setAttribute("src", "./icon/add-fill2.svg");
                   

            flag = 1;
            
          } else {
            elem.nextElementSibling.classList.add("hidden");
    
            topic.style.color = "#fff";
    
            plusImg.setAttribute("src", "./icon/add-fill.svg");
            

            flag = 0;
            
          }
        });
      });
    }catch(e){
      console.log(e.mesaage);
    }
  
  
  
  
}

export default questions;
