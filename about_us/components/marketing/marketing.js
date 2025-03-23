async function loadMarketingPage(jsonFilePath) {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        const data = await response.json();

        // Actualizar la sección del título
        const subheadingElement = document.getElementById("marketing-subheading");
        const titleElement = document.getElementById("marketing-title");
        const descriptionElement = document.getElementById("marketing-description");

        if (subheadingElement) subheadingElement.textContent = data.sectionTitle.subheading;
        if (titleElement) titleElement.textContent = data.sectionTitle.title;
        if (descriptionElement) descriptionElement.textContent = data.sectionTitle.description;

        // Generar dinámicamente las características
        const featuresContainer = document.querySelector(".marketing-row");
        if (featuresContainer) {
            featuresContainer.innerHTML = ""; // Limpiar contenido existente

            data.features.forEach((feature) => {
                const featureHTML = `
          <div class="marketing-feature thq-flex-column">
            <img
              alt="${feature.altText}"
              src="${feature.imageSrc}"
              class="thq-img-ratio-4-3 marketing-feature-image"
            />
            <div class="marketing-content thq-flex-column">
              <h3 class="thq-heading-3 marketing-text">${feature.title}</h3>
              <span class="thq-body-small marketing-text">${feature.description}</span>
            </div>
          </div>
        `;
                featuresContainer.insertAdjacentHTML("beforeend", featureHTML);
            });
        }

        // Actualizar el botón de acción
        const buttonElement = document.getElementById("marketing-button");
        if (buttonElement) {
            buttonElement.textContent = data.button.label;
            buttonElement.setAttribute("href", data.button.link);
        }
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
    }
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadMarketingPage(getProjectRoot() + "JSON/marketing.json");
});
