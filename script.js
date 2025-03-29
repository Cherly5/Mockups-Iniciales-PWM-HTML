// Función para cargar un template en un elemento específico
function loadTemplate(fileName, id, callback) {
    console.log("Cargando template:", fileName, "en", id);
    /*
    if (id === 'index_marketing.html') {
        if (typeof loadContent === 'function') {
            console.log("Ejecutando loadContent()...");
            loadContent();
        } else {
            console.error("Error: loadContent() no está definida.");
        }
    } else {*/
        fetch(fileName)
            .then((res) => res.text())
            .then((text) => {
                document.getElementById(id).innerHTML = text;
                adjustLinks(id);

                if (callback) callback();
            })
            .catch((error) => {
                console.error(`Error cargando el template ${fileName}:`, error);
            });

}


// Función principal (init)
function init() {
    console.log("Inicializando templates desde JSON...");

    // Leer el archivo JSON con los templates
    let templatesFile = getRootPath() + '/templates.json';
    fetch(templatesFile)
        .then((res) => res.json())
        .then((templates) => {
            templates.forEach((template) => {
                // Cargar cada template según su configuración
                loadTemplate(template.template, template.id, () => {
                    console.log(`Template ${template.template} cargado en el elemento #${template.id}`);
                });
            });
        })
        .catch((error) => {
            console.error("Error leyendo el archivo JSON:", error);
        });
}

// Función genérica para ajustar enlaces en navbar o footer
function adjustLinks(componentId) {
    const basePath = getRootPath()
    const container = document.getElementById(componentId); // Encuentra el contenedor correspondiente

    if (!container) {
        console.error(`${componentId} no encontrado en el DOM.`);
        return;
    }

    // Ajustar enlaces dentro del contenedor (navbar o footer)
    const linkIndex = container.querySelector('#link-index');
    const linkAbout = container.querySelector('#link-about');
    const linkRecipes = container.querySelector('#link-recipes');
    const linkSignUp = container.querySelector('#link-sign-up');
    const linkSignIn = container.querySelector('#link-sign-in');
    const linkMyRecipes = container.querySelector('#link-my-recipes');

    if (linkIndex) linkIndex.href = basePath + 'index.html';
    if (linkAbout) linkAbout.href = basePath + 'about_us/about_us.html';
    if (linkRecipes) linkRecipes.href = basePath + 'recipes/recipes.html';
    if (linkSignUp) linkSignUp.href = basePath + 'sign_up/sign_up.html';
    if (linkSignIn) linkSignIn.href = basePath + 'sign_in/sign_in.html';
    if (linkMyRecipes) linkMyRecipes.href = basePath + 'my_recipes/my_recipes.html';

    console.log(`Enlaces ajustados para ${componentId}`);
}

/**
 * Calcula la ruta hacia la raíz del proyecto desde la ubicación actual.
 * @returns {string} Ruta relativa a la raíz del proyecto
 */
function getRootPath() {
    const currentPath = window.location.pathname; // Ruta actual (ej.: /paginas/subcarpeta/contact.html)
    const depth = currentPath.split('/').length - 3; // Calcula la profundidad desde la raíz
    return '../'.repeat(depth); // Genera la ruta relativa hacia la raíz
}


// Ejecutar la función init cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
