async function kids() {
  
    let kids="";
    try {
      let data = await fetch("https://elyad27.github.io/database/db.json");
      let res = await data.json();

      let [backGround] = res.kids.splice(0,1); 
      
      let bgOfKids= document.createElement('div');
      bgOfKids.setAttribute('class',backGround.divClass);
      
      document.querySelector(".kids").insertAdjacentElement("afterbegin" , bgOfKids);
    

      kids = res.kids.map((el) => {
        return `<div class="${el.divClass}">${el.content}</div>`;
      }).join('');

      document.querySelector(".kids .inside").insertAdjacentHTML("beforeend" , kids);
    } catch (error) {
      console.log(error.mesaage);
    }

  
  
  
    
}

export default kids;
