/*let ir = document.getElementById("ir");
URL = "http://localhost:4001";
let data = [];

let correo = document.getElementById("inputCorreo").value; 
ir.addEventListener("click", () => {
 let correo = document.getElementById("inputCorreo").value; 

  //window.location.href='./index2.html'; //llamo a la ventana 2
});
*/
const obtener = async (id) =>{
  try{
      const resp = await fetch(`http://localhost:4001${id}`)
      const post = await resp.json()
      console.log(resp);
  }
    catch (error){
        console.log(error)
    }

} 


