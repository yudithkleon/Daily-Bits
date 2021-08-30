
export default class Usuario{

    url = ' http://localhost:4000/usuarios';

    constructor(nombre, apellido, correo, login){
        this.nombre = nombre,
        this.apellido = apellido,
        this.login = login,
        this.correo = correo
    }

    crearPerfil(perfil){
        axios.post(this.url,perfil)
        .then(data => console.log(data))
        .catch(console.warn)
        alert('Usuario Creado');
    }

    buscarPerfil(email){   //recibe el email
       axios.get(this.url) //eliminamos el return estaba regresando informacion incorrecta
      .then(({data}) => {
         localStorage.setItem('Buscado',JSON.stringify(data.find(user => user.correo === email)))
       })
    }

    editarPerfil(perfil,id){
        axios.put(this.url+id,perfil)
        .then(data => console.log(data))
        .catch(console.warn)
    }

    eliminarPerfil(id){
        axios.delete(this.url+id)
        .then(data => console.log(data))
        .catch(console.warn)
    }
   
}