/**
 * Poblar un HTML basado en datos de un archivo JSON.
 * @param {string} templateName - Nombre del template (sin extensión) para buscar el JSON correspondiente.
 */
function populateFromJSON(templateName) {
    const jsonFilePath = `/JSON/${templateName}.json`; // Ruta al JSON basado en el nombre del template

    fetch(jsonFilePath)
        .then((res) => {
            if (!res.ok) throw new Error(`No se pudo cargar el archivo JSON: ${jsonFilePath}`);
            return res.json();
        })
        .then((data) => {
            console.log(`Archivo JSON ${jsonFilePath} cargado exitosamente. Poblando datos...`);

            // Recorrer las claves y rellenar los elementos HTML correspondientes
            Object.entries(data).forEach(([key, value]) => {
                const element = document.querySelector(`[data-field="${key}"]`);
                if (!element) {
                    console.warn(`Elemento con data-field="${key}" no encontrado.`);
                    return;
                }

                // Actualizar los elementos según el tipo de dato
                if (typeof value === 'string' || typeof value === 'number') {
                    if (element.tagName === 'IMG') {
                        element.src = value; // Actualizar la fuente si es una imagen
                    } else {
                        element.textContent = value; // Rellenar texto para otros casos
                    }
                } else if (Array.isArray(value)) {
                    element.innerHTML = value.map((item) => `<img src="${item}" alt="">`).join('');
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([nestedKey, nestedValue]) => {
                        const nestedElement = element.querySelector(`[data-field="${nestedKey}"]`);
                        if (nestedElement) {
                            nestedElement.textContent = nestedValue;
                        }
                    });
                }
            });

            console.log('Datos JSON poblados en el template correctamente.');
        })
        .catch((error) => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el nombre del archivo HTML actual sin la extensión
    const templateName = ("./index/index_slider/index_slider.html").split('/').pop().split('.')[0];
    console.log(`Detectado el archivo HTML: ${templateName}`); // Para verificar en la consola
    // Llamar al método con el nombre del template detectado
    populateFromJSON('index_slider');
});

