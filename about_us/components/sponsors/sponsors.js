function loadSponsorsFromJSON(jsonFilePath) {
    fetch(jsonFilePath)
        .then((response) => response.json())
        .then((data) => {
            // Actualizar el título
            const titleElement = document.querySelector(".sponsors-text2");
            if (titleElement) {
                titleElement.textContent = data.title;
            }

            // Seleccionar el contenedor por ID
            const gridContainer = document.getElementById("sponsors-grid");
            if (gridContainer) {
                gridContainer.innerHTML = ""; // Limpiar contenido previo

                // Crear los logos dinámicamente
                data.logos.forEach((logo) => {
                    const imgElement = document.createElement("img");
                    imgElement.alt = logo.alt;
                    imgElement.src = logo.src;
                    imgElement.className = `${logo.class} thq-img-ratio-16-9`;
                    gridContainer.appendChild(imgElement);
                });
            }
        })
        .catch((error) => console.error("Error al cargar el JSON:", error));
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadSponsorsFromJSON(getProjectRoot() + "/JSON/sponsors.json");
});
