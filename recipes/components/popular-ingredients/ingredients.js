const ingredients = document.getElementById("ingredients")
fetch(ingredients.querySelector("a[rel=json]").href)
    .then(response => response.json())
    .then(data => {
        data = data.ingredients
        const title = ingredients.querySelector(".heading-1")
        title.innerText = data.title
        title.nextElementSibling.innerText = data.text
        const grid = ingredients.querySelector(".ingredients-grid")
        const template = ingredients.querySelector("template")
        data.cards.forEach(card => {
            let clone = document.importNode(template.content, true).querySelector("div")
            let img = clone.querySelector("img")
            img.src = card.image.src
            img.alt = card.image.alt
            clone.querySelector(".heading-2").innerText = card.name
            clone.querySelector(".text-body-small").innerText = card.description
            grid.appendChild(clone)
        })
    })