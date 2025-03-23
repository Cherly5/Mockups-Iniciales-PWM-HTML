// https://stackoverflow.com/questions/40162907/w3includehtml-sometimes-includes-twice


async function xLuIncludeFile() {
    let z = document.getElementsByTagName("*");

    for (let i = 0; i < z.length; i++) {
        if (z[i].getAttribute("xlu-include-file")) {
            let a = z[i].cloneNode(false);
            let file = z[i].getAttribute("xlu-include-file");

            try {
                let response = await fetch(file);
                if (response.ok) {

                    let content = await response.text();

                    a.removeAttribute("xlu-include-file");
                    //a.innerHTML = await response.text();
                    a.innerHTML = content;
                    z[i].parentNode.replaceChild(a, z[i]);

                    // Ajustar rutas dinámicamente dependiendo del archivo cargado
                    if (file.includes('navbar.html')) {
                        adjustLinks('navbar');
                    } else if (file.includes('footer.html')) {
                        adjustLinks('footer');
                    } else if (file.includes('welcome-about-us.js.html')) {
                        adjustLinks('welcome-about-us.js');
                    } else if (file.includes('marketing.html')) {
                        adjustLinks('marketing');
                    }

                    //css
                    const styles = a.querySelectorAll('link[rel="stylesheet"]');
                    styles.forEach(style => {
                        if (style.href){
                            let href = pathing(style.href);
                            const link = document.createElement("link");
                            link.rel = "stylesheet";
                            link.href = href;
                            link.type = "text/css";
                            document.head.appendChild(link);
                            style.remove();
                        }
                    })

                    // Ahora ejecutamos el script si existe
                    const scripts = a.querySelectorAll('script');
                    scripts.forEach(script => {
                        if (script.src) {
                            let src = pathing(script.src);
                            // Si el script tiene src, lo cargamos dinámicamente
                            const newScript = document.createElement('script');
                            newScript.src = src;
                            newScript.defer = false;
                            newScript.innerText = script.innerText;
                            document.body.appendChild(newScript);
                        } else {
                            // Si el script es inline, lo ejecutamos directamente
                            eval(script.innerText);

                        }
                        script.remove()
                    });
                    // Introducir un retardo de 5 segundos antes de llamar nuevamente
                    setTimeout(() => {
                        xLuIncludeFile();
                    }, 500); // 5000 milisegundos = 5 segundos
                }
            } catch (error) {
                console.error("Error fetching file:", error);
            }

            return;
        }
    }
}

// Función genérica para ajustar enlaces en navbar o footer
function adjustLinks(component) {
    const currentPath = window.location.pathname; // Ruta actual
    const levelsUp = currentPath.split('/').length - 3; // Niveles para regresar a la raíz
    const basePath = '../'.repeat(levelsUp); // Ruta base generada

    let container;
    if (component === 'navbar') {
        container = document.querySelector('nav'); // Buscar el navbar
    } else if (component === 'footer') {
        container = document.querySelector('footer'); // Buscar el footer
    } else if (component === 'welcome-about-us.js') {
        container = document.querySelector('#welcome-about-us.js');
    } else if (component === 'marketing') {
        container = document.querySelector('#marketing');
    }

    if (!container) {
        console.error(`${component} no encontrado en el DOM.`);
        return;
    }

    // Ajustar enlaces del navbar o footer
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
}

function getProjectRoot() {
    // Obtener la ruta actual desde donde se ejecuta el script
    const currentPath = window.location.pathname;

    // Dividir la ruta por '/' y buscar el índice donde está el proyecto
    const pathSegments = currentPath.split('/');
    const rootIndex = pathSegments.findIndex((segment) => segment === 'Mockups-Iniciales-PWM-HTML');

    // Si se encuentra el nombre del proyecto en la ruta
    if (rootIndex !== -1) {
        // Crear la ruta a la raíz del proyecto
        const rootPath = pathSegments.slice(0, rootIndex + 1).join('/');
        return rootPath.endsWith('/') ? rootPath : rootPath + '/';
    }

    // Si no se encuentra el nombre del proyecto
    throw new Error("El nombre 'Mockups-Iniciales-PWM-HTML' no está en la ruta actual.");
}

function project() {
    return "/" + window.location.pathname.split('/').at(1) + '/'
}

/**
 * pathing
 * @param link source
 * @returns {string} of absolute path under the working project
 */
function pathing(link){
    let path = link.split('/').slice(0,3).join('/');
    if (project() !== '/' + link.split('/').at(3) + '/') {
        path = path + project() + link.split('/').slice(3).join('/');
    } else {
        path = link
    }
    return path;
}

