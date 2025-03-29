async function loadNavbarForAuthenticatedUser(jsonFilePath) {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        const data = await response.json();

        // Actualizar el logo
        const logoElement = document.querySelector(".logo");
        if (logoElement) {
            logoElement.src = data.logo.src;
            logoElement.alt = data.logo.alt;
        }

        // Actualizar los enlaces del navbar excluyendo "link-my-recipes" y "link-profile"
        const navBarElement = document.getElementById("navigation-bar");
        if (navBarElement) {
            navBarElement.innerHTML = ""; // Limpiar contenido existente

            data.links
                .filter((link) => link.id !== "link-my-recipes" && link.id !== "link-profile")
                .forEach((link) => {
                    const linkHTML = `<a rel="internal" href="${link.href}" id="${link.id}" class="text-body-small link"><span>${link.label}</span></a>`;
                    navBarElement.insertAdjacentHTML("beforeend", linkHTML);
                });
        }

        // Actualizar los botones excluyendo "Sign Up" y "Sign In"
        const buttonContainer = document.querySelector(".flex-row");
        if (buttonContainer) {
            buttonContainer.innerHTML = ""; // Limpiar contenido existente

            data.buttons.forEach((button) => {
                if (button.id !== "link-sign-up" && button.id !== "link-sign-in") {
                    const buttonHTML = `
            <button class="button-animated ${button.id === "link-profile" ? "button-background-neutral" : "button-background-filled-reverse"}">
              <a rel="internal" href="${button.href}" id="${button.id}" class="button-link">${button.label}</a>
            </button>`;
                    buttonContainer.insertAdjacentHTML("beforeend", buttonHTML);
                }
            });
        }
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
    }
}

async function loadNavbarForUnauthenticatedUser(jsonFilePath) {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        const data = await response.json();

        // Actualizar el logo
        const logoElement = document.querySelector(".logo");
        if (logoElement) {
            logoElement.src = data.logo.src;
            logoElement.alt = data.logo.alt;
        }

        // Actualizar los enlaces del navbar
        const navBarElement = document.getElementById("navigation-bar");
        if (navBarElement) {
            navBarElement.innerHTML = ""; // Limpiar contenido existente

            data.links.forEach((link) => {
                const linkHTML = `<a rel="internal" href="${link.href}" id="${link.id}" class="text-body-small link"><span>${link.label}</span></a>`;
                navBarElement.insertAdjacentHTML("beforeend", linkHTML);
            });
        }

        // Actualizar los botones excluyendo "link-profile"
        const buttonContainer = document.querySelector(".flex-row");
        if (buttonContainer) {
            buttonContainer.innerHTML = ""; // Limpiar contenido existente

            data.buttons
                .filter((button) => button.id !== "link-profile")
                .forEach((button) => {
                    const buttonHTML = `
            <button class="button-animated ${button.id === "link-sign-up" ? "button-background-filled" : "button-background-filled-reverse"}">
              <a rel="internal" href="${button.href}" id="${button.id}" class="button-link">${button.label}</a>
            </button>`;
                    buttonContainer.insertAdjacentHTML("beforeend", buttonHTML);
                });
        }
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
    }
}

function loadNavbarBasedOnUserStatus(jsonFilePath) {
    const user = localStorage.getItem("user");

    if (user !== null) {
        console.log("Usuario autenticado. Cargando navbar para usuarios autenticados.");
        loadNavbarForAuthenticatedUser(jsonFilePath);
    } else {
        console.log("Usuario no autenticado. Cargando navbar para usuarios no autenticados.");
        loadNavbarForUnauthenticatedUser(jsonFilePath);
    }
}

// Llamar al método al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadNavbarBasedOnUserStatus("navbar-data.json");
});
