document.addEventListener("DOMContentLoaded",()=>{
  inicio();
});

function inicio(){
  logear();  
}

const ingreso = document.querySelector('input[type="submit"]');

ingreso.addEventListener("click",logear)

function logear(e){
  e.preventDefault();
  logear();
}

async function logear() {
  try {
    const url = "http://localhost:5500/datos.json";
    const resultado = await fetch(url);
    
    const datos = await resultado.json() ;
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
}