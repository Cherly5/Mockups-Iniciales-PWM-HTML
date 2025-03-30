
function loadNavbarForAuthenticatedUser(data) {
    updateNavbar(data, ["link-sign-up", "link-sign-in"]);
}
function loadNavbarForGuestUser(data) {
    updateNavbar(data, ["link-my-recipes", "link-profile", "link-log-out"]);
}

function buttons(data, excludeIds, buttonContainer) {
    data.buttons.forEach(button => {

        if (!excludeIds.includes(button.id)) {
            const btn = document.createElement("button");
            btn.className = button.id === "link-profile" ? "button-animated button-background-filled-reverse" : "button-animated button-background-filled";
            const a = document.createElement("a");

            a.href = project() + button.href;
            a.id = button.id;
            a.className = "button-link";
            a.textContent = button.label;
            btn.appendChild(a);

            buttonContainer.appendChild(btn);
        }
    });
}

function updateNavbar(data, excludeIds) {
    updateMobileNavbar(data, excludeIds);
    console.log(excludeIds)
    const navBar = document.getElementById("navigation-bar");
    navBar.innerHTML = "";
    data.links.forEach(link => {

        if (!excludeIds.includes(link.id)) {
            const a = document.createElement("a");
            a.href = project() + link.href;
            a.id = link.id;
            a.className = "text-body-small link";
            a.innerHTML = `<span>${link.label}</span>`;
            navBar.appendChild(a);
        }
    });
    const buttonContainer = document.querySelector(".navbar-desktop-menu .flex-row:last-child");

    buttonContainer.innerHTML = "";
    buttons(data, excludeIds, buttonContainer);
}

function updateMobileNavbar(data, excludeIds){
    console.log(data.mobileLinks)
    const links = document.getElementById("links-pop-up")
    const template = links.querySelector("template")
    for (const link of data.mobileLinks) {
        const clone = document.importNode(template.content, true).querySelector("a")
        clone.href = project() + link.href;
        clone.querySelector("img").src = link.imageSrc
        clone.querySelector("img").alt = link.altText
        clone.querySelector("span").innerText = link.title
        clone.querySelector("span").nextElementSibling.innerText = link.description
        links.appendChild(clone);

    }
    buttons(data, excludeIds, links.nextElementSibling);
}

function loadNavbar() {
    fetch("/navigation-bar/navbar.json") // Reemplaza con la ruta real del JSON
        .then(response => response.json())
        .then(data => {
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            if (currentUser === null) {
                loadNavbarForGuestUser(data);
            } else {
                loadNavbarForAuthenticatedUser(data);
            }
        })
        .catch(error => console.error("Error loading navbar JSON:", error));
}

// Llamar al método al cargar la página

loadNavbar();

const burgerMenu = document.querySelector(".navbar-burger-menu");
const mobileMenu = document.querySelector(".navbar-mobile-menu");
const closeMenu = document.querySelector(".navbar-close-menu");

burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.add("hidden");
    mobileMenu.classList.add("active");
});
closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    burgerMenu.classList.remove("hidden");
});

document.getElementById("link-log-out").addEventListener("click", function () {
    event.preventDefault();
    const currentUser = JSON.stringify(null)
    localStorage.setItem("currentUser", currentUser);
    window.location.href = "/index/index.html";
});
