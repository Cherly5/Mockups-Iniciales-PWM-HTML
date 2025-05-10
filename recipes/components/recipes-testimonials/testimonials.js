const testimonials = document.getElementById('testimonials');
fetch(testimonials.querySelector("a[rel=json]").href)
    .then(response => response.json())
    .then(data => {
        data = data.testimonials
        document.getElementById("testimonials-title").innerText = data.title
        const star = document.getElementById("star-icon")
        const template = document.getElementById("slide")
        const container = testimonials.querySelector(".swiper-wrapper")
        data.slides.forEach((slide) => {
            let clone = document.importNode(template.content, true).querySelector("div")
            clone.querySelector("img").alt = slide.image.alt
            clone.querySelector("img").src = slide.image.src
            clone.querySelector("p").innerText = slide.description
            let stars = clone.querySelector(".recipes-testimonials-stars")
            for (let i = 0; i < slide.valuation; i++) {
                let icon = document.importNode(star.content, true).querySelector("svg")
                stars.appendChild(icon)
            }
            let content = clone.querySelector(".recipes-testimonials-avatar-content").querySelector("span")
            content.innerText = slide.author
            content.nextElementSibling.innerText = slide.job
            content = clone.querySelector(".recipes-testimonials-avatar").querySelector("img")
            content.alt = slide.logo.alt
            content.src = slide.logo.src
            container.appendChild(clone)
        })
    })