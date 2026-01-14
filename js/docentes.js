/* ===== Leemos el jason de docentes ===== */

fetch("data/docentes.json")
.then(response => {
    if(!response.ok){
        throw new Error("No se pudo cargar el archivo JSON"); 
    }
    return response.json();
})
.then(docentes => {
    console.log(docentes); 
    mostrarDocentes(docentes); 
})
.catch(error => {
    console.error("Error: ", error); 
}); 

function mostrarDocentes(docentes){
    const contenedorDocentes = document.querySelector("#contDocentes")
    
    docentes.forEach(docente => {
        let contenedor = document.createElement("div"); 
        contenedor.innerHTML = `
            <div class="cell tarjetaDocente">
                    <img class="imagenDocente" src="${docente.imagen}" alt="">
                    <p class="nombreDocente">${docente.nombre}</p>
                    <p class="cargoDocente">${docente.cargo}</p>
            </div>
        ` 
        contenedorDocentes.appendChild(contenedor); 
    });
    
}


