import Usuario from "../script/class/usuario.js";

let formulario = document.getElementById("formulario");
let btnCorreo = document.getElementById("btnCorreo");

const usuario = new Usuario();

document.addEventListener("DOMContentLoaded", usuario);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("lastName").value;
  let correo = document.getElementById("email").value;
  let login = document.getElementById("login").value;
  usuario.nombre = nombre;
  usuario.apellido = apellido;
  usuario.correo = correo;
  usuario.login = login;
  usuario.crearPerfil(usuario);
});

btnCorreo.addEventListener("click", () => {
  let correos = document.getElementById("email").value; //guarda el valor de email
  document.getElementById("email").readOnly = true; // modifica el input leible
  usuario.buscarPerfil(correos); // buscar ye nvio lo que tenga
  let perfil = JSON.parse(localStorage.getItem("Buscado")); //obtengo
  console.log(perfil);
  const { nombre, apellido, correo, id } = perfil; //lo desestructura
  document.getElementById("name").value = nombre;
  document.getElementById("lastName").value = apellido;
  document.getElementById("email").value = correo;
  document.getElementById("id").value = id;
  document.getElementById("login").value = login;
});

btnEditar.addEventListener("click", () => {
  let id = document.getElementById("id").value;
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("lastName").value;
  let correo = document.getElementById("email").value;
  let login = document.getElementById("login").value;
  usuario.nombre = nombre;
  usuario.apellido = apellido;
  usuario.correo = correo;
  usuario.login = login;
  usuario.editarPerfil(usuario, id);
});

btnEliminar.addEventListener("click", () => {
  let id = document.getElementById("id").value;
  usuario.eliminarPerfil(id);
});
