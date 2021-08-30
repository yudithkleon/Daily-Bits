let btn = document.getElementById("ir");

let respBien = 0;
let respMal = 0;
let respTotal = 0;


btn.addEventListener("click", capturarDatos);

function capturarDatos() {
  let resp = document.querySelector("input[name=o]:checked").value;
  let vidas =document.getElementById('vidas');
  vidas = 4;
  compRespuesta(resp, vidas);
}

function compRespuesta(resp, vidas){
  respTotal = respTotal + 1;
  if (resp == "script") {
    correcta();
    document.getElementById("progreso").innerHTML += `<div id="progreso" class="progress-bar bg-success progres" role="progressbar" style="width: 17%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>`;
    document.getElementById("condicion").innerHTML +=`<label id="vidas">${vidas}</label>`;
    respBien = respBien + 1;
    console.log(vidas);
    console.log(respBien);
  } 
  else
  {
    incorrecta();
    vidas = vidas - 1;
    document.getElementById("condicion").innerHTML += `<label id="vidas">${vidas}</label>`;
    console.log('me quedan vidas;');
    console.log (vidas);
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
    text: "¡Sigue intentandolo!",
    confirmButtonText: "continuar",
  });
}

console.log(respBien);
console.log(respMal);
console.log(respTotal);
