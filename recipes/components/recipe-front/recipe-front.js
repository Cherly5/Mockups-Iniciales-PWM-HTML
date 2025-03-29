
const front = document.getElementById("front")
fetch(front.querySelector("a[rel=json]").href).then(res => res.json()).then(data => {
    data = data.front;
    front.querySelector(".recipe-front-heading").innerText = data.heading
    front.querySelector("img").alt = data.image.alt
    front.querySelector("img").src = data.image.src
    front.querySelector(".recipe-front-author-name").innerText = data.author
    front.querySelector(".recipe-front-title").innerText = data.slogan
    const categories = document.getElementById("categories")
    const allergens = document.getElementById("allergens")
    const templateCategories = categories.querySelector("template")
    const templateAllergens = allergens.querySelector("template")
    let clone;
    data.tags.categories.forEach(category => {
        clone = document.importNode(templateCategories.content,true).querySelector("span")
        clone.innerText = category
        categories.appendChild(clone)
    })
    data.tags.allergens.forEach(allergen => {
        clone = document.importNode(templateAllergens.content,true).querySelector("span")
        clone.innerText = allergen
        allergens.appendChild(clone)
    })

})
