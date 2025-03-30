const stars = document.querySelectorAll(".star-rating .star");
stars.forEach(star => {
    star.addEventListener("click", (e) => {
        let rating = e.target.dataset.value;
        stars.forEach(s => {
            s.classList.toggle("selected", s.dataset.value <= rating);
            localStorage.setItem("rating", rating);
        });
    });
});

window.addEventListener("beforeunload", function () {
    console.log(localStorage.getItem("rating"))
});
