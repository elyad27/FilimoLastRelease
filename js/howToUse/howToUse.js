async function howToUse(){
    
    let contents ="";

    try {
      let data = await fetch("https://elyad27.github.io/database/db.json");
      let res = await data.json();
      
      
      contents = res.howToUse.map((el) => {
        return `<div class="${el.divClass}">${el.content}</div>`;
      }).join('');
      
      document.querySelector(".howToUse").insertAdjacentHTML("beforeend" , contents);
      
  
    } catch (error) {
      console.log(error.mesaage);
    }
  };
  
  export default howToUse;