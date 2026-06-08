const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        console.log("Status:", response.status);

        if (response.ok) {
            window.location.href = "pages/gracias.html";
        } else {
            console.error("Formspree devolvió error");
        }

    } catch (error) {
        console.error("Error al enviar:", error);
    }
});