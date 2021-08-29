let btn = document.getElementById("ir");

let respBien = 0;
let respMal = 0;
let respTotal = 0;
let vidas = 4;

btn.addEventListener("click", capturarDatos);

function capturarDatos() {
  let resp = document.querySelector("input[name=respuesta]:checked").value;
  let vidas =document.getElementById('vidas').value;
  let condicion= document.getElementById('condicion');
  compRespuesta(resp, vidas, condicion);
}

function compRespuesta(resp, vidas, condicion) {
  respTotal = respTotal + 1;
  if (resp == "main") {
    correcta();
    respBien = respBien + 1;
    console.log(respBien);
    document.getElementById.innerHTML = `<div id="progreso" class="progress-bar bg-success progres" role="progressbar" style="width: 17%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>`;

  } 
  else
  {
    incorrecta();
    vidas = vidas - 1;
    console.log(vidas);
    respMal = respMal + 1;
    console.log(respMal);
   
  }
}

function correcta() {
  Swal.fire({
    position: "bottom",
    background: "#ACFFCF",
    text: "¡Excelente!",
    confirmButtonText: "continuar",
  });
}

function incorrecta() {
  Swal.fire({
    position: "bottom",
    background: "#F9CFD7",
    text: "¡Asi No es!",
    confirmButtonText: "continuar",
  });
}

console.log(respBien);
console.log(respMal);
console.log(respTotal);
