document.addEventListener("DOMContentLoaded", async function () {
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
});