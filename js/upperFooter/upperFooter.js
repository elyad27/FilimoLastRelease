async function upperFooter() {
    let contents = "";
    try{

      let data = await fetch("https://elyad27.github.io/database/db.json");
      let res = await data.json();
      let [topic] = res.upperFooter.slice(0,1);
      
      document.querySelector(".upperFooter div").classList.add(topic.bg);
      document.querySelector(".upperFooter .inside .filimoIcon img").setAttribute("src" , topic.src);
     
      
      
      
      document.querySelector(".upperFooter .inside").insertAdjacentHTML("beforeend",`<a href="#" class="${topic.classOfa}">${topic.contentA}</a>`);

      
      res.upperFooter.shift();
      
      contents = res.upperFooter.map((el) => {
        
          return `<div class="item flex flex-row items-center gap-x-2">${el.content}</div>`;
        
      }).join('');
      document.querySelector(".upperFooter .inside .mid").insertAdjacentHTML('beforeend' , contents);
      



      
      
    }catch(e){
      console.log(e.mesaage);
    }
  
  
  
  
}

export default upperFooter;
