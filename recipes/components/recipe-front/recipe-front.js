
fetch(document.getElementById())
const front = document.getElementById("front")
front.querySelector(".recipe-front-heading").innerText = data.heading
front.querySelector("img").alt = data.image.alt
front.querySelector("img").src = data.image.src
front.querySelector(".recipe-front-author-name").src = data.author
front.querySelector(".recipe-front-title").src = data.slogan
const categories = document.getElementById("categories")
const allergens = document.getElementById("allergens")
const templateCategories = categories.querySelector("template")
const templateAllergens = allergens.querySelector("template")
let clone;
data.tags.categories.forEach(category => {
    clone = document.importNode(templateCategories.content,true)
    clone.querySelector("span").innerText = category
    categories.appendChild(clone)
})
data.tags.allergens.forEach(allergen => {
    clone = document.importNode(templateAllergens.content,true)
    clone.querySelector("span").innerText = allergen
    allergens.appendChild(clone)
})
