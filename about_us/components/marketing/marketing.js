async function loadMarketingPage(jsonFilePath) {
    const response = await fetch(jsonFilePath);
    if (!response.ok) {
        throw new Error("No se pudo cargar el archivo JSON");
    }

    /** @type {JSON}*/
    const data = await response.json();

    // Actualizar la sección del título
    const subheadingElement = document.getElementById("marketing-subheading");
    const titleElement = document.getElementById("marketing-title");
    const descriptionElement = document.getElementById("marketing-description");

    if (subheadingElement) subheadingElement.textContent = data.sectionTitle.subheading;
    if (titleElement) titleElement.textContent = data.sectionTitle.title;
    if (descriptionElement) descriptionElement.textContent = data.sectionTitle.description;

    // Generar dinámicamente las características
    const featuresContainer = document.getElementById("marketing-features");
    const template = featuresContainer.querySelector("template");
    if (featuresContainer) {
        featuresContainer.innerHTML = ""; // Limpiar contenido existente

        data.features.forEach((feature) => {
            const clone = document.importNode(template.content, true);
            const img = clone.querySelector("img")
            img.src = feature.image;
            img.alt = feature.alt;
            clone.querySelector(".heading-3").innerText = feature.title;
            clone.querySelector(".text-body-small").innerText = feature.description;
            featuresContainer.appendChild(clone)
        });
    }

    // Actualizar el botón de acción
    const buttonElement = document.getElementById("marketing-button");
    if (buttonElement) {
        buttonElement.textContent = data.button.label;
        buttonElement.setAttribute("href", data.button.link);
    }
}

loadMarketingPage(document.getElementById("marketing").querySelector("a[rel=json]").href).catch((er) => {console.error("Error al cargar el JSON:", er);})
