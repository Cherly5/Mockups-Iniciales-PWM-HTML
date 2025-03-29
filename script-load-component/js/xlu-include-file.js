// https://stackoverflow.com/questions/40162907/w3includehtml-sometimes-includes-twice

async function xLuIncludeFile() {
    xLuInclude().then(() => adjustInternalLinks())
}

async function xLuInclude() {
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

/**
 * while rendering a page, this function obtains the working project in the form: https://localhost:port/working-project/
 * which is returned as:
 * @returns {string}
 */
function project() {
    return "/" + window.location.pathname.split('/').at(1) + '/'
}

/**
 * pathing - corrects routes according to an absolute path under de working project
 * @see project() - defines the project directory under which the param link should be
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

/**
 * adjust links in the form a[rel=internal]
 * @see pathing() - works for adjust path, in this case, used to modify a.href
 */
function adjustInternalLinks() {
    document.querySelectorAll('a[rel=internal]').forEach(link => {
        link.href = pathing(link.href);
    })
}

