const menu = document.querySelector("nav");
const logo = document.querySelector(".logo");
const toggle = document.querySelector(".toggle");

window.addEventListener("scroll", function() {
    if (window.scrollY > window.innerHeight - 100) {
        menu.style.backgroundColor = "rgba(230, 59, 64, 0.5)";
        logo.style.backgroundColor = "rgba(230, 59, 64, 0.5)";
        toggle.style.backgroundColor = "rgba(230, 59, 64, 0.5)";
    } else {
        menu.style.backgroundColor = "rgb(250, 239, 230, 0.15)";
        logo.style.backgroundColor = "rgb(250, 239, 230, 0.15)";
        toggle.style.backgroundColor = "rgb(250, 239, 230, 0.15)";
    }
})

toggle.addEventListener("click", function() {
    menu.classList.toggle("open");
    toggle.classList.toggle("open");
})