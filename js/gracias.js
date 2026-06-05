const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            Accept: "application/json"
        }
    });

    if (response.ok) {
        window.location.href = "../pages/gracias.html";
    }

    if (response.ok) {
    console.log(window.location.href);
    window.location.href = "/jardinMaternal/pages/gracias.html";
}
});