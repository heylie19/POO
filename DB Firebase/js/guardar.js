function guardar(){
    db.collection("empleados").add({
        nombre: document.getElementById("name").value,
        salario: document.getElementById("salario").value,
    })

    .then((docRef) => {
       alert("REGISTRO EXITOSO");
    })
    .catch((error) => {
        alert("ERROR EN EL REGISTRO");
    });
}