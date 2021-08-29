function correcta(){
    Swal.fire({
        position:'bottom',
        background: '#ACFFCF',
        text:'¡Buen trabajo!',
        confirmButtonText:'continuar'
    });
}

function incorrecta(){
    Swal.fire({
        position:'bottom',
        background: '#F9CFD7',
        text:'¡Casi!',
        confirmButtonText:'continuar'
    });
}