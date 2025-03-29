async function loadIngredientsPage(jsonFilePath) {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        const data = await response.json();

        // Actualizar título y descripción
        const titleElement = document.getElementById("ingredients-title");
        const descriptionElement = document.getElementById("ingredients-description");

        if (titleElement) titleElement.textContent = data.sectionTitle.title;
        if (descriptionElement) descriptionElement.textContent = data.sectionTitle.description;

        // Generar dinámicamente las tarjetas
        const cardContainer = document.querySelector(".ingredients-container2");
        if (cardContainer) {
            cardContainer.innerHTML = ""; // Limpiar el contenido existente

            data.cards.forEach((card) => {
                const cardHTML = `
          <div class="ingredients-card thq-flex-column thq-card">
            <img
              alt="${card.altText}"
              src="${card.imageSrc}"
              class="ingredients-image thq-img-round thq-img-ratio-1-1"
            />
            <h2 class="thq-heading-2 ingredients-text-inline">${card.title}</h2>
            <span class="ingredients-text thq-body-small ingredients-text-inline">
              ${card.description}
            </span>
          </div>
        `;
                // Insertar las tarjetas de manera dinámica
                cardContainer.insertAdjacentHTML("beforeend", cardHTML);
            });
        }
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
    }
}

// Llamar al método al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadIngredientsPage(getProjectRoot() + "/JSON/popular-ingredients.json");
});
