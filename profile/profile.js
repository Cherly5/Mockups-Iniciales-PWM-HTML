fetch(document.querySelector("a[rel=json]")).then(res => res.json()).then((data) => {
    document.getElementById("profile-title").innerText = data.title;
    const img = document.querySelector(".profile-image").querySelector("img")
    img.src = data.image.src
    img.alt = data.image.alt
})
