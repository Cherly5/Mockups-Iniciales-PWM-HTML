async function loadRecipe(jsonFilePath, recipeIndex) {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        const data = await response.json();

        // Comprobar que el índice es válido
        const recipe = data.recipes[recipeIndex];
        if (!recipe) {
            console.error(`No se encontró una receta en el índice ${recipeIndex}`);
            return;
        }

        // Actualizar el contenido de la página con la receta seleccionada
        const container = document.querySelector(".recipe-front-max-width");
        container.innerHTML = ""; // Limpiar contenido existente

        const recipeHTML = `
      <div class="grid-columns-2 recipe-front-card">
        <img
          alt="${recipe.title}"
          src="${recipe.imageSrc}"
          class="recipe-front-image img-ratio-4-3"
        />
        <div class="recipe-front-container">
          <div class="recipe-front-content flex-column">
            <h1 class="heading-1 recipe-front-title recipe-front-text">${recipe.title}</h1>
            <span class="recipe-front-author-name text-body-small recipe-front-text">By ${recipe.author}</span>
            <div class="recipe-front-share-buttons flex-row">
              ${recipe.shareIcons
            .map(
                (icon) =>
                    `<button class="button-background-filled share-button-icon">
                      <svg class="icon-small"><use href="#icon-${icon}"></use></svg>
                    </button>`
            )
            .join("")}
            </div>
          </div>
          <div id="recipe-tags" class="flex flex-wrap gap-2">
            ${recipe.categories
            .map((category) => `<span class="recipe-tag recipe-tag-category">${category}</span>`)
            .join("")}
            ${recipe.allergens
            .map((allergen) => `<span class="recipe-tag recipe-tag-allergen">${allergen}</span>`)
            .join("")}
          </div>
        </div>
      </div>
    `;

        container.insertAdjacentHTML("beforeend", recipeHTML);
    } catch (error) {
        console.error("Error al cargar la receta:", error);
    }
}

// Llamar al método al cargar la página
//loadRecipe(document.getElementById("recipe-front").querySelector("a[rel=json]").href, 0).catch((er) => {console.error("Error al cargar el JSON:", er);})
loadRecipe("./components/recipe-front/recipe-front.json", 0);