fetch(document.querySelector("a[rel=json]")).then(res => res.json()).then((data) => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users !== null) {
        document.getElementById("profile-title").innerText = users;
    } else {
        document.getElementById("profile-title").innerText = data.title;
    }
    const img = document.querySelector(".profile-image").querySelector("img")
    img.src = data.image.src
    img.alt = data.image.alt
})
