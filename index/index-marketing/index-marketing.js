

fetch(document.getElementById("index-marketing").querySelector("a[rel=json]").href).then((response) => response.json()).then((data) => {
    const marketing = data.marketing;
    const template = document.getElementById("index-marketing-tab");
    const container = document.getElementById("index-marketing-container");
    marketing.forEach((section) => {
        const clone = document.importNode(container.content,true)
            .querySelector(".index-marketing-container")
        const img = clone.querySelector("img")
        img.src = section.image.src
        img.alt = section.image.alt

        const menu = clone.querySelector(".index-marketing-tabs-menu");
        section.tabs.forEach((tab) => {
            const clone2 = document.importNode(template.content,true)
                .querySelector(".index-marketing-tab");
            clone2.querySelector(".heading-2").innerText = tab.title;
            clone2.querySelector(".text-body-small").innerText = tab.content;
            menu.appendChild(clone2)
        })
        if (section.side === "left"){
            clone.classList.replace("index-marketing-container","index-marketing-container-reverse")
        }
        document.getElementById("index-marketing").querySelector(".section-padding").appendChild(clone)
    })
}).catch((error) => console.error("JSON", error));