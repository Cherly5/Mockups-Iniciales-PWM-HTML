const welcome = document.getElementById("welcome");
fetch(welcome.querySelector("a[rel=json]").href)
    .then(response => response.json())
    .then(data => {
        data = data.welcome
        const img = welcome.querySelector("img")
        img.src = data.image.src
        img.alt = data.image.alt
        welcome.querySelector(".heading-1").innerText = data.title
        welcome.querySelector("p").innerText = data.text
    })