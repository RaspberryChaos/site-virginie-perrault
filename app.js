//Prestations - "En Savoir Plus" buttons
const espButtons = document.querySelectorAll(".more-info");

espButtons.forEach(btn => {
    btn.addEventListener("click", e => enSavoirPlus(e));
});

function enSavoirPlus(e) {
    e.target.textContent = e.target.textContent === "Voir Moins" ? "En Savoir Plus" : "Voir Moins";
    
    const value = e.target.value;
    
    if(value === "groupe_parole_papa") {
        document.getElementById("short-gpp").classList.toggle("hidden");
        document.getElementById("long-gpp").classList.toggle("hidden");
    } else {
        document.getElementById(`long-${value}`).classList.toggle("hidden");
    }   
}




