fetch(document.getElementById("welcome-about-us").querySelector("a[rel=json]").href).then((response) => response.json()).then((data) => {
    const welcome = document.getElementById("welcome-about-us");
    welcome.querySelector(".heading-1").innerText = data.title;
    welcome.querySelector(".text-body-large").innerText = data.subtitle;
    const img = welcome.querySelector("img");
    img.src = data.image.src;
    img.alt = data.image.alt;
}).catch((error) => console.error("error json",error));