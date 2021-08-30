import Usuario from "../script/class/usuario.js";

let ir = document.getElementById("ir");
let olvContraseña=document.getElementById("olvContraseña");
let inscribir = document.getElementById("inscribir");
URL = "http://localhost:4001";
let data = [];
const usuario = new Usuario();


ir.addEventListener("click", () => {
  let correos = document.getElementById("inputCorreo").value; //guarda el valor de email
/*
  localStorage.setItem('Buscado',JSON.stringify(data.find(user => user.correos === email)))
  let perfil = JSON.parse(localStorage.getItem("Buscado")); //obtengo
  console.log(perfil)*/
  window.location.href = "./index2.html";
});


inscribir.addEventListener("click", () => {
   window.location.href = "./usuario.html"; //llamo a la ventana 2
});

olvContraseña.addEventListener("click", () => {
  window.location.href = "./usuario.html"; //llamo a la ventana 2
});


//validar el correo


/*
const obtener = async (id) => {
  try {
    const resp = await fetch(`http://localhost:4001${id}`);
    const post = await resp.json();
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};*/
