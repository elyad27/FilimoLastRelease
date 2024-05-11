// function same name like modular name
async function menu() {
  let list = "";
  let buttons="";
  try {
    let data = await fetch("https://elyad27.github.io/database/db.json");
    let res = await data.json();
    let data2 = await fetch("https://elyad27.github.io/database/db.json");
    let res2 = await data2.json();
    list = res.menuRight.map((el) => {
      
      return `<li class="${el.liClass}"><a href="#" class="${el.aClass}">${el.svg}
      <p class="${el.pClass}">${el.name}</p>
    </a></li>
      `;
    }).join('');
    buttons = res2.menuLeft.map((el)=>{
    return `<button class="${el.buttonClass}" type="button">${el.svg}<span class="${el.spanClass}">${el.name}
    </span></button>
    `;
    }).join("");

    document.querySelector(".menuRight").insertAdjacentHTML("beforeend" , list);
    document.querySelector(".menuLeft").insertAdjacentHTML("beforeend" , buttons);
  } catch (error) {
    console.log(error.mesaage);
  }
}

export default menu;





