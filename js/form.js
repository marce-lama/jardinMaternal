const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página intente navegar
    
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert("¡Muchas gracias! Tu mensaje ha sido enviado correctamente al jardín.");
        form.reset(); // Limpia los campos del formulario
      } else {
        alert("Hubo un error al enviar. Por favor, intentalo de nuevo.");
      }
    })
    .catch(error => {
      alert("Error de conexión. Revisá tu internet.");
    });
  });