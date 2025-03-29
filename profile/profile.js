fetch(document.querySelector("a[rel=json]")).then(res => res.json()).then((data) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser !== null) {
        document.getElementById("profile-title").innerText = currentUser;
    } else {
        document.getElementById("profile-title").innerText = data.title;
    }
    const img = document.querySelector(".profile-image").querySelector("img")
    img.src = data.image.src
    img.alt = data.image.alt
})
