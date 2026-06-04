let listaActividades = []; 

fetch("data/actividades.json")
.then(response => {
    if(!response.ok ){
        throw new Error ("No se pudo cargar el archivo JSON")
    }
    return response.json();
})
.then(actividades => {
    listaActividades = actividades; 
    mostrarActividades(); 
    agregarEventosModal();
})
.catch(error =>{
    console.log("Error: ", error);
}); 

function mostrarActividades(){
    const contActividades = document.querySelector("#contenedorActividades"); 
    contActividades.innerHTML = ""; 
    
    listaActividades.forEach(actividad => {
        let contenedor = document.createElement("div");

        contenedor.classList.add("cell", "imgActividades"); 

        contenedor.innerHTML = `
                <div>
                    <a class="linkImagen">
                        <img src="${actividad.imagen}"
                            alt=""
                            data-imagen="${actividad.imagen}">
                    </a>
                </div>
        `
        contActividades.appendChild(contenedor); 
        console.log(actividad.id)
    });
}

function agregarEventosModal(){

    const modal = document.querySelector("#modalImagen");
    const imagenModal = document.querySelector("#imagenModal");
    const cerrarModal = document.querySelector("#cerrarModal");

    document.querySelectorAll(".linkImagen img").forEach(img => {

        img.addEventListener("click", () => {

            imagenModal.src = img.dataset.imagen;

            modal.style.display = "flex";
        });
    });

    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {

        if(e.target === modal){
            modal.style.display = "none";
        }

    });
}