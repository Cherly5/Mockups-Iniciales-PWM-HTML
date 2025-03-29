fetch(document.getElementById("index-slider").querySelector("a[rel=json]").href)
.then(res => res.json())
.then(data => {
    document.getElementById("index-slider-title")
        .querySelector(".heading-1")
        .innerText = data.title;
    const images = data.images
    const img = document.getElementById("index-slider-slide")
    const bullet = document.getElementById("slider-pagination-bullet");
    const slider = document.getElementById("index-slider").querySelector(".swiper-wrapper");
    images.forEach(image => {
        const clone = document.importNode(img.content,true).querySelector(".swiper-slide")
        clone.querySelector("img").setAttribute("src", image.src);
        clone.querySelector("img").setAttribute("alt", image.alt);
        slider.appendChild(clone)
    })
    const pagination = document.getElementById("index-slider").querySelector(".swiper-pagination");
    if (images.length > 1) {
        console.log(images.length)
        for (let i = 0; i <= images.length; i++) {
            console.log(i)
            pagination.appendChild(document.importNode(bullet.content,true).querySelector(".swiper-pagination-bullet"));
        }
    }
}).catch(err => console.log("JSON", err));