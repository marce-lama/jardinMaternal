let listaActividades = [];
let fotosMostradas = 0;
const cantidadPorCarga = 8;

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
})
.catch(error =>{
    console.log("Error: ", error);
}); 

function mostrarActividades(){
    const contActividades = document.querySelector("#contenedorActividades"); 
    
    for(let i = fotosMostradas; i < fotosMostradas + cantidadPorCarga && i < listaActividades.length; i++){
        const actividad = listaActividades[i];
        let contenedor = document.createElement("div");

        contenedor.classList.add("cell", "imgActividades"); 

        contenedor.innerHTML = `
                <div>
                    <a class="linkImagen ">
                        <img src="${actividad.imagen}"
                            alt=""
                            data-imagen="${actividad.imagen}">
                    </a>
                </div>
        `;
        contActividades.appendChild(contenedor); 
        console.log(actividad.id)
    }
    fotosMostradas += cantidadPorCarga; 
    agregarEventosModal(); 

    if(fotosMostradas >= listaActividades.length){
        document.querySelector("#verMas").textContent = "Cerrar"; 
    }
}; 

const botonVerMas = document.querySelector("#verMas");

botonVerMas.addEventListener("click", () => {

    if(botonVerMas.textContent === "Cerrar"){

        fotosMostradas = 0;

        document.querySelector("#contenedorActividades").innerHTML = "";

        botonVerMas.textContent = "Ver más";

        mostrarActividades();

        document.querySelector("#actividades").scrollIntoView({
            behavior: "smooth"
        });

        return;
    }

    mostrarActividades();

});


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
