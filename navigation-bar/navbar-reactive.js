
document.addEventListener("DOMContentLoaded", function () {
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
});
