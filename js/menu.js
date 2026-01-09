/* ===== leemos el json de secciones ===== */

fetch("data/secciones.json")
    .then(resp => {
        if(!resp.ok){
            throw new Error("No se pudo cargar el archivo secciones.json");
        }
        return resp.json(); 
})
    .then(secciones => {
        crearMenuNavbar(secciones); 
        crearMenuFooter(secciones); 
    })
    .catch(error => console.error(error))


/* ===== NAVBAR ===== */

function crearMenuNavbar(secciones){
    const contenedor = document.querySelector("#menuNavbar");  
    contenedor.innerHTML = ""; 
    secciones.forEach(sec => { 
        const link = document.createElement("a"); 
        link.classList.add("navbar-item"); 
        link.href = `#${sec.id}`;
        link.textContent = `${sec.label}`

        contenedor.appendChild(link)  
    });
    
}

/* ===== FOOTER ===== */

function crearMenuFooter(secciones){
    const contenedor = document.querySelector("#menuFooter"); 
    contenedor.innerHTML = ""; 

    secciones.forEach(sec => {
        const li = document.createElement("li");
        const link = document.createElement("a"); 

        link.classList.add("colorSeccionesFooter"); 
        link.href = `#${sec.id}`; 
        link.textContent = `${sec.label}`

        contenedor.appendChild(li)
        contenedor.appendChild(link)
    });
}