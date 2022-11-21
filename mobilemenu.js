const menu=document.querySelector("#mobilemenu");
const show=document.querySelector(".menu");
  

menu.addEventListener("click",()=>{
    if(show.style.display==="none"){
    show.style.display="flex"
    }

    else{show.style.display="none"
}
})

