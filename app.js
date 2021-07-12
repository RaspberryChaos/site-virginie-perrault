//Mobile Nav-Menu

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

//Prestations - "En Savoir Plus" buttons

const btnMB = document.getElementById("esp-massage-bebe");
const btnPE = document.getElementById("esp-portage-echarpe");
const btnGPP = document.getElementById("esp-gpp");
const btnME = document.getElementById("esp-me");

btnMB.addEventListener("click", (e) => {
    e.target.textContent = e.target.textContent === "Moins" ? "En Savoir Plus" : "Moins";
    document.getElementById("long-mb").classList.toggle("hidden");
});

btnPE.addEventListener("click", (e) => {
    e.target.textContent = e.target.textContent === "Moins" ? "En Savoir Plus" : "Moins";
    document.getElementById("short-pe").classList.toggle("hidden");
    document.getElementById("long-pe").classList.toggle("hidden");
});

btnGPP.addEventListener("click", (e) => {
    e.target.textContent = e.target.textContent === "Moins" ? "En Savoir Plus" : "Moins";
    document.getElementById("short-gpp").classList.toggle("hidden");
    document.getElementById("long-gpp").classList.toggle("hidden");
});

btnME.addEventListener("click", (e) => {
    e.target.textContent = e.target.textContent === "Moins" ? "En Savoir Plus" : "Moins";
    document.getElementById("long-me").classList.toggle("hidden");
});




