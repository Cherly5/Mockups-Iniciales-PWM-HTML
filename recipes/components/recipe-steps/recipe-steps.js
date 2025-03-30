const steps = document.getElementById("steps")
fetch(steps.querySelector("a[rel=json]").href).then(response => response.json()).then(data => {
    data = data.steps
    document.getElementById("recipe-steps-title").innerText = data.title
    const ingredientsContainer = document.getElementById("recipe-ingredients")
    const stepTemplate = document.getElementById("recipe-step-template")
    const  li = ingredientsContainer.querySelector("template")
    const ul = li.parentElement
    data.ingredients.forEach(ingredient => {
        let clone = document.importNode(li.content,true).querySelector("li")
        clone.querySelector("span").innerText = ingredient
        ul.appendChild(clone)
    })
    data.steps.forEach(step => {
        let clone = document.importNode(stepTemplate.content,true).querySelector(".recipe-steps-step")
        clone.querySelector(".heading-3").innerText = step.chapter
        clone.querySelector(".text-body-small").innerText = step.description
        ingredientsContainer.parentElement.appendChild(clone)
    })
})

