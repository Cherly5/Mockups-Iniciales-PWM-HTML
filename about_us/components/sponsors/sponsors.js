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


function getProjectRoot() {
    // Obtener la ruta actual desde donde se ejecuta el script
    const currentPath = window.location.pathname;

    // Dividir la ruta por '/' y buscar el índice donde está el proyecto
    const pathSegments = currentPath.split('/');
    const rootIndex = pathSegments.findIndex((segment) => segment === 'Mockups-Iniciales-PWM-HTML');

    // Si se encuentra el nombre del proyecto en la ruta
    if (rootIndex !== -1) {
        // Crear la ruta a la raíz del proyecto
        const rootPath = pathSegments.slice(0, rootIndex + 1).join('/');
        return rootPath.endsWith('/') ? rootPath : rootPath + '/';
    }

    // Si no se encuentra el nombre del proyecto
    throw new Error("El nombre 'Mockups-Iniciales-PWM-HTML' no está en la ruta actual.");
}
