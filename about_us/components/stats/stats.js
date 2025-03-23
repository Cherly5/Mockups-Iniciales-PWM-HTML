fetch("/JSON/stats.json").then((response) => response.json()).then((data) => {
    const title = document.getElementById("stats-title");
    const subtitle = document.getElementById("stats-subtitle");
    const description = document.getElementById("stats-description");
    const stats = document.getElementById("stats").querySelector(".grid-columns-2");
    const img = document.getElementById("stats").querySelector("img");

    const template = stats.querySelector("#stats-cell");

    title.innerText = data.title
    subtitle.innerText = data.subtitle
    description.innerText = data.description
    img.alt = data.image.alt
    img.src = data.image.src

    data.stats.forEach((stat) => {
        const clone = document.importNode(template.content,true)
        const cell = clone.querySelector(".stats-cell");
        cell.querySelector(".heading-2").innerText = stat.title;
        cell.querySelector(".text-body-small").innerText = stat.subtitle;
        stats.appendChild(cell);
    })


}).catch((error) => console.error("error de JSON", error))