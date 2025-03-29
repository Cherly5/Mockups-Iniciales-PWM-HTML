const carousel = document.getElementById("carousel")
fetch(carousel.querySelector("a[rel=json]").href)
    .then(response => response.json())
    .then(async function(data){
        data = data.carousels
        carousel.querySelector(".heading-1").innerText = data.title
        carousel.querySelector("p").innerText = data.intro
        const normal = carousel.querySelector(".carousel-horizontal")
        const reverse = carousel.querySelector(".carousel-horizontal-reverse")
        const img = carousel.querySelector("template")
        carouselImages(data.rows.normal,normal,img)
        carouselImages(data.rows.reverse,reverse,img)
})

async function carouselImages(data, container, template) {
    console.log(data)
    for (let i = 0; i < 2; i++) {
        data.forEach(element => {
            let clone = document.importNode(template.content, true).querySelector("img")
            clone.src = element.src
            clone.alt = element.alt
            container.appendChild(clone)
        })
    }
}
