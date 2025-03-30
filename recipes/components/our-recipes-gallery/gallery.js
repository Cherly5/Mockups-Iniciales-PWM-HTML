const gallery = document.getElementById("gallery")

function imgIter(container, content, data, number) {
    let clone = document.importNode(content,true).querySelector("div")
    let img = clone.querySelector("img")
    for (let i = 0; i < number; i++) {
        img.alt = data[i].alt
        img.src = data[i].src
        img = img.nextElementSibling
    }
    container.appendChild(clone)
}

fetch(gallery.querySelector("a[rel=json]").href)
    .then(response => response.json())
    .then(data => {
        data = data.gallery
        gallery.querySelector(".heading-2").innerText = data.title
        gallery.querySelector(".text-body-large").innerText = data.text
        const side = document.getElementById("side-column")
        const middle = document.getElementById("middle-column")
        const container = gallery.querySelector(".our-recipes-gallery-content")
        imgIter(container, side.content, data.first, 2);
        imgIter(container, middle.content, data.middle, 3);
        imgIter(container, side.content, data.last, 2);
    })