document.addEventListener("DOMContentLoaded",()=>{
  window.location="https://omsard.glideapp.io";
  //inicio();
});

function inicio(){
  logear();  
}

const ingreso = document.querySelector('input[type="submit"]');

//ingreso.addEventListener("click",logear)

function logear(e){
  e.preventDefault();
  const usuario = document.querySelector("#user");
  const pass = document.querySelector("#pass");
  if (usuario == "Willis") {
    
  }
}

async function base() {
  
  try {
    const url = "http://localhost:5500/datos.json";
    const resultado = await fetch(url);
    
    const datos = await resultado.json() ;
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
}
