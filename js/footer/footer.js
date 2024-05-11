async function footer() {
    let contents = "";
    try{

      let data = await fetch("https://elyad27.github.io/database/db.json");
      let res = await data.json();
      
      
      


      
      
      
      contents = res.footer.map((el) => {
        
          return `<ul class="${el.classDetail}">${el.content}</ul>`;
        
      }).join('');
      document.querySelector("footer").insertAdjacentHTML("afterbegin", contents);




      
      
    }catch(e){
      console.log(e.mesaage);
    }
  
  
  
  
}

export default footer;
