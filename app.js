console.log("connected");

const btnPortageEcharpe = document.getElementById("esp-portage-echarpe");

btnPortageEcharpe.addEventListener("click", () => {
    document.getElementById("extra-info-pe").classList.toggle("hidden");
    document.getElementById("brief-pe").classList.toggle("hidden");
})


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

window.addEventListener("resize", closeMenu);