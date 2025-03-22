/*document.addEventListener("DOMContentLoaded", async function () {
    const sliderWrapper = document.getElementById("slider-recipes-content");

    if (!sliderWrapper) {
        console.error("No se encontró el contenedor del slider.");
        return;
    }

    try {
        let response = await fetch("slider_my_recipes/recipes.json");
        if (!response.ok) throw new Error("No se pudo cargar recipes.json");

        let data = await response.json();
        sliderWrapper.innerHTML = ""; // Limpia el contenido anterior

        data.recipes.forEach(recipe => {
            let slide = document.createElement("div");
            slide.classList.add("swiper-slide");

            slide.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.alt}" class="slider_my_recipes-image thq-img-ratio-4-3">
                <h3 class="slider_my_recipes-recipe-title">${recipe.title}</h3>
            `;

            sliderWrapper.appendChild(slide);
        });

        // Iniciar Swiper después de cargar dinámicamente
        new Swiper(".swiper-container", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        });

    } catch (error) {
        console.error("Error al cargar recetas:", error);
    }
});*/

function initializeRecipeSlider() {
    const recipesData = {
        "recipes": [
            {
                "name": "Pasta al Pesto",
                "description": "Delicious homemade pasta with fresh pesto sauce.",
                "image": "https://images.unsplash.com/photo-1606101205680-30d1fe1f3fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTgyMjA3NXw&ixlib=rb-4.0.3&q=80&w=1080"
            },
            {
                "name": "Colorful Salad Bowl",
                "description": "A healthy and vibrant salad full of nutrients.",
                "image": "https://images.unsplash.com/photo-1681168707621-bde9765d668b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTgyMjA3NXw&ixlib=rb-4.0.3&q=80&w=1080"
            },
            {
                "name": "Chocolate Dessert",
                "description": "A rich and decadent chocolate delight.",
                "image": "https://images.unsplash.com/photo-1722222333212-dce948c09207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTgyMjA3NXw&ixlib=rb-4.0.3&q=80&w=1080"
            }
        ]
    };

    const sliderWrapper = document.querySelector(".swiper-wrapper");

    if (!sliderWrapper) {
        console.error("No se encontró el contenedor del slider.");
        return;
    }

    // Limpiar el slider antes de agregar elementos
    sliderWrapper.innerHTML = "";

    // Generar dinámicamente las diapositivas
    recipesData.recipes.forEach((recipe) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        slide.innerHTML = `
      <div class="recipe-slide">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" />
        <h3 class="recipe-title">${recipe.name}</h3>
        <p class="recipe-description">${recipe.description}</p>
      </div>
    `;

        sliderWrapper.appendChild(slide);
    });

    // Inicializar Swiper
    new Swiper(".swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

// Ejecutar la función cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", initializeRecipeSlider);