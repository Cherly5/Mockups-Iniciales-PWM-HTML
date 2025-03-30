// Asegúrate de que las clases asignadas a los elementos tienen estilos CSS coherentes para la alineación del texto

async function loadRecipePage(jsonFilePath, recipeIndex) {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        const data = await response.json();

        // Validar que la receta existe
        const recipe = data.recipes[recipeIndex];
        if (!recipe) {
            console.error(`No se encontró una receta en el índice ${recipeIndex}`);
            return;
        }

        // Cargar el nombre de la receta
        const header = document.getElementById("recipe-name");
        header.textContent = recipe.name;
        header.classList.add("text-align-left"); // Clase CSS sugerida

        // Descripción de la receta
        const description = document.getElementById("recipe-description");
        description.textContent = recipe.description;
        description.classList.add("text-align-left");

        // Cargar los ingredientes
        const ingredientsList = document.getElementById("recipe-ingredients");
        ingredientsList.innerHTML = ""; // Limpiar contenido existente
        ingredientsList.classList.add("text-align-left");
        recipe.ingredients.forEach((ingredient) => {
            const li = document.createElement("li");
            // li.className = "list-item flex-column text-align-left"; // Clase CSS sugerida
            li.innerHTML = `
                <span class="heading-3 text-align-left">${ingredient.title}</span>
                <p class="text-body-small">${ingredient.details}</p>
            `;
            ingredientsList.appendChild(li);
        });

        // Cargar los pasos
        const stepsList = document.getElementById("recipe-steps");
        stepsList.innerHTML = ""; // Limpiar contenido existente
        recipe.steps.forEach((step, index) => {
            const li = document.createElement("li");
            // li.className = "list-item flex-column text-align-left"; // Clase CSS sugerida
            li.innerHTML = `
                <span class="heading-3 text-align-left">Paso ${index + 1}</span>
                <p class="text-body-small">${step}</p>
            `;
            stepsList.appendChild(li);
        });
    } catch (error) {
        console.error("Error al cargar la receta:", error);
    }
}

loadRecipePage("components/my_recipe_description/my_recipe_description.json", 0);
