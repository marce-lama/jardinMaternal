function agregarEventosModalInstal() {

    const modal = document.querySelector("#modalImagenInstalaciones");
    const imagenModal = modal.querySelector("img");
    const cerrarModal = modal.querySelector(".cerrar");

    document
        .querySelectorAll(".galeria-instalaciones img, .miniaturas img")
        .forEach(img => {

            img.addEventListener("click", () => {

                imagenModal.src = img.src;
                modal.style.display = "flex";

            });

        });

    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

}

agregarEventosModalInstal();