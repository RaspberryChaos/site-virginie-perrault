console.log("connected");

const btnPortageEcharpe = document.getElementById("esp-portage-echarpe");

btnPortageEcharpe.addEventListener("click", () => {
    document.getElementById("extra-info-pe").classList.toggle("hidden");
    document.getElementById("brief-pe").classList.toggle("hidden");
})


   