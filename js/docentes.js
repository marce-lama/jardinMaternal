/* ===== Leemos el jason de docentes ===== */
let listaDocentes = []; 
let expandido = false; 


fetch("data/docentes.json")
.then(response => {
    if(!response.ok){
        throw new Error("No se pudo cargar el archivo JSON"); 
    }
    return response.json();
})
.then(docentes => {
    listaDocentes = docentes; 
    mostrarDocentes();  
})
.catch(error => {
    console.error("Error: ", error); 
}); 

const boton = document.getElementById("botonExpan"); 

boton.addEventListener("click", function(e){
    e.preventDefault(); 

    expandido = !expandido; 
    mostrarDocentes();

    boton.textContent = expandido ? "Ver menos" : "Ver más"; 

    if (!expandido) {
        document.querySelector("#equipo").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
})


function mostrarDocentes(){
    const contenedorDocentes = document.querySelector("#contDocentes");
    contenedorDocentes.innerHTML = "";

    const docentesAMostrar = expandido 
        ? listaDocentes 
        : listaDocentes.slice(0, 3);

    docentesAMostrar.forEach((docente, index) => {
        let contenedor = document.createElement("div"); 
        
        contenedor.classList.add("tarjetaDocente");

        contenedor.innerHTML = `
            <div class="imagen-wrapper">
                <img class="imagenDocente" src="${docente.imagen}" alt="">
            </div>
            <p class="nombreDocente">${docente.nombre}</p>
            <p class="cargoDocente">${docente.cargo}</p>
        `;

        contenedorDocentes.appendChild(contenedor);

        // ⏱️ Animación escalonada (clave tipo Netflix)
        setTimeout(() => {
            contenedor.classList.add("tarjetaDocente");
        }, index * 100); // uno detrás de otro
    });
}


