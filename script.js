const barIcon = document.querySelector(".bar-icon");
const navLinks = document.querySelectorAll(".nav-link");
const closeIcon = document.querySelector(".close-icon");
const header = document.querySelector("#header");
const body = document.body;

barIcon.addEventListener("click", () => {
    const navContainer = document.querySelector(".nav-container");
    navContainer.classList.toggle("show");
    barIcon.classList.toggle("close");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    closeIcon.addEventListener("click", () => {
        navContainer.classList.remove("show");
        barIcon.classList.remove("close");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("fixed");
        body.style.paddingTop = `${header.offsetHeight}px`;
    } else {
        header.classList.remove("fixed");
        body.style.paddingTop = 0;
    }
});