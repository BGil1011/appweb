document.addEventListener("DOMContentLoaded",()=>{
  inicio();
});

function inicio(){
  
}

const ingreso = document.querySelector('input[type="submit"]');

ingreso.addEventListener("click",logear)

function logear(e){
  e.preventDefault();
  console.log("Ingresando...");
}