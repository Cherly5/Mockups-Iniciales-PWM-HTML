// https://stackoverflow.com/questions/40162907/w3includehtml-sometimes-includes-twice
/*
function xLuIncludeFile() {
    let z, i, a, file, xhttp;

    z = document.getElementsByTagName("*");

    for (i = 0; i < z.length; i++) {
        if (z[i].getAttribute("xlu-include-file")) {
            a = z[i].cloneNode(false);
            file = z[i].getAttribute("xlu-include-file");
            xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    a.removeAttribute("xlu-include-file");
                    a.innerHTML = xhttp.responseText;
                    z[i].parentNode.replaceChild(a, z[i]);
                    xLuIncludeFile();
                }
            }

            // false makes the send operation synchronous, which solves a problem
            // when using this function in short pages with Chrome. But it is
            // deprecated on the main thread due to its impact on responsiveness.
            // This call may end up throwing an exception someday.

            xhttp.open("GET", file, false);
            xhttp.send();

            return;
        }
    }
}
*/

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

                    // Si el archivo es una plantilla, reemplazamos los placeholders
                    if (file === "article-template.html") {
                        let articleData = {
                            title: z[i].getAttribute("data-title"),
                            subtitle: z[i].getAttribute("data-subtitle"),
                            date: z[i].getAttribute("data-date"),
                            displayDate: z[i].getAttribute("data-display-date"),
                            content: z[i].getAttribute("data-content"),
                            image: z[i].getAttribute("data-image"),
                            imageCaption: z[i].getAttribute("data-image-caption")
                        };

                        content = content.replace(/{{title}}/g, articleData.title)
                            .replace(/{{subtitle}}/g, articleData.subtitle)
                            .replace(/{{date}}/g, articleData.date)
                            .replace(/{{displayDate}}/g, articleData.displayDate)
                            .replace(/{{content}}/g, articleData.content)
                            .replace(/{{image}}/g, articleData.image || '')
                            .replace(/{{imageCaption}}/g, articleData.imageCaption || '');
                    }


                    a.removeAttribute("xlu-include-file");
                    //a.innerHTML = await response.text();
                    a.innerHTML = content;
                    z[i].parentNode.replaceChild(a, z[i]);


                    // Ahora ejecutamos el script si existe
                    const scripts = a.querySelectorAll('script');
                    scripts.forEach(script => {
                        if (script.src) {
                            // Si el script tiene src, lo cargamos dinámicamente
                            const newScript = document.createElement('script');
                            newScript.src = script.src;
                            newScript.defer = true;
                            newScript.innerText = script.innerText;
                            document.body.appendChild(newScript);

                        } else {
                            // Si el script es inline, lo ejecutamos directamente
                            eval(script.innerText);

                        }
                    });

                    // Ajustar rutas únicamente en el footer
                    if (file.includes('footer.html')) {
                        adjustFooterLinks();
                    }

                    xLuIncludeFile();
                }
            } catch (error) {
                console.error("Error fetching file:", error);
            }

            return;
        }
    }
}

// Función para ajustar rutas dinámicamente
function adjustFooterLinks() {
    const currentPath = window.location.pathname; // Ruta actual, ej.: "/paginas/subcarpeta/contact.html"
    const levelsUp = currentPath.split('/').length - 3; // Cuántos niveles subir
    const basePath = '../'.repeat(levelsUp); // Genera la ruta base

    // Ajusta las rutas de los enlaces
    const linkIndex = document.getElementById('link-index');
    const linkAbout = document.getElementById('link-about');
    const linkRecipes = document.getElementById('link-recipes');
    const linkSignUp = document.getElementById('link-sign-up');
    const linkSignIn = document.getElementById('link-sign-in');


    if (linkIndex) linkIndex.href = basePath + 'index.html';
    if (linkAbout) linkAbout.href = basePath + 'about_us/about_us.html';
    if (linkRecipes) linkRecipes.href = basePath + 'recipes/xlu-include-recipes/recipes.html';
    if (linkSignUp) linkSignUp.href = basePath + '/sign_up/sign_up.html';
    if (linkSignIn) linkSignIn.href = basePath + '/sign_in/sign_in.html';
}
