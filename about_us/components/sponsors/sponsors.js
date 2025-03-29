function loadSponsorsFromJSON(jsonFilePath) {
    fetch(jsonFilePath)
        .then((response) => response.json())
        .then((data) => {
            // Actualizar el título
            const title = document.getElementById('sponsors-title')
            if (title) {
                title.textContent = data.title;
            }
            const template = document.getElementById('sponsors').querySelector("template")
            // Seleccionar el contenedor por ID
            const logos = document.getElementById("sponsors-logos");
            if (logos) {
                logos.innerHTML = ""; // Limpiar contenido previo
                // Crear los logos dinámicamente
                data.logos.forEach((logo) => {
                    const clone = document.importNode(template.content, true);
                    const img = clone.querySelector("img");
                    img.alt = logo.alt;
                    img.src = logo.src;
                    logos.appendChild(img);
                });
            }
        })
        .catch((error) => console.error("Error al cargar el JSON:", error));
}

// Llamar a la función al cargar la página
loadSponsorsFromJSON(document.getElementById("sponsors").querySelector("a[rel=json]").href);
