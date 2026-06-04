let listaInstalaciones = []; 

fetch("data/instalaciones.json")
.then(response => {
    if(!response.ok){
        throw new Error("No se pudo cargar el archivo JSON")
    }
    return response.json();
})
.then(instalaciones => {
    listaInstalaciones = instalaciones; 
    mostrarInstalaciones(); 
})
.catch(error => {
    console.log("Error: ", error);
}); 

