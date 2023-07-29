let btn=document.getElementById("btn");
let colour=document.getElementById("color");
const getColor=()=>{
    //hex code
    const randomnumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomnumber.toString(16);
    colour.innerText = randomCode;
    document.body.style.backgroundColor=randomCode;
    navigator.clipboard.writeText(randomCode);
    
}

btn.addEventListener('click',getColor);
getColor();
  