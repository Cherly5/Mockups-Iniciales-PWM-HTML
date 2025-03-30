function loadContent(containerId, imageId, textPosition) {
    const data = {
        image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        tabs: [
            { title: "Quality Ingredients", text: "We source the freshest ingredients for our recipes" },
            { title: "Explore Cuisines", text: "Variety of cuisines to explore" },
            { title: "Easy to Follow Recipes", text: "Step-by-step instructions for each recipe" }
        ]
    };

    // Configurar la imagen dinámica
    const dynamicImage = document.getElementById(imageId);
    if (dynamicImage) {
        dynamicImage.src = data.image;
    }

    // Configurar el contenedor principal
    const contentContainer = document.getElementById(containerId);
    if (contentContainer) {
        contentContainer.className = `index_marketing-container2 thq-section-max-width ${
            textPosition === "left" ? "text-left" : "text-right"
        }`;
    }

    // Limpiar y rellenar el contenedor de tabs
    const tabsContainer = document.querySelector(`#${containerId} .index_marketing-tabs-menu`);
    if (tabsContainer) {
        tabsContainer.innerHTML = ""; // Limpiar contenido
        data.tabs.forEach((tab) => {
            const tabDiv = document.createElement("div");
            tabDiv.className = "index_marketing-tab-horizontal";
            tabDiv.innerHTML = `
                <div class="index_marketing-divider-container">
                    <div class="index_marketing-container"></div>
                </div>
                <div class="index_marketing-content">
                    <h2 class="thq-heading-2">${tab.title}</h2>
                    <span class="thq-body-small">${tab.text}</span>
                </div>
            `;
            tabsContainer.appendChild(tabDiv);
        });
    }
}

// Cargar ambos componentes al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    // Cargar el componente con texto a la izquierda
    loadContent("content-container-left", "dynamic-image-left", "left");

    // Cargar el componente con texto a la derecha
    loadContent("content-container-right", "dynamic-image-right", "right");
});
