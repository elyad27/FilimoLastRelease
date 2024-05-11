async function access() {
    
    let access="";
    try {
      let data = await fetch("https://elyad27.github.io/database/db.json");
      let res = await data.json();
      
      access = res.access.map((el) => {
        return `<div class="${el.divClass}">${el.content}</div>`;
      }).join('');

      document.querySelector(".access").insertAdjacentHTML("beforeend" , access);
    } catch (error) {
      console.log(error.mesaage);
    }



}



export default access;