// Función para cargar un template en un elemento específico
function loadTemplate(fileName, id, callback) {
    fetch(fileName)
        .then((res) => res.text())
        .then((text) => {
            // Inserta el contenido del template en el elemento correspondiente
            document.getElementById(id).innerHTML = text;

            // Llama al callback si se proporciona
            if (callback) {
                callback();
            }
        })
        .catch((error) => {
            console.error(`Error cargando el template ${fileName}:`, error);
        });
}

// Función principal (init)
function init() {
    console.log("Inicializando templates desde JSON...");

    // Leer el archivo JSON con los templates
    fetch('templates.json')
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

// Ejecutar la función init cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
