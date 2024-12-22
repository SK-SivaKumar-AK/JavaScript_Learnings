const inputName = document.getElementById("name");
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", () => {
    outputName.textContent = `Typed Name: ${inputName.value}`;
});




const carSelected = document.getElementById("car");
const selectedCar = document.getElementById("selected-car");

carSelected.addEventListener("change", () => {
    selectedCar.textContent = `Selected Car: ${carSelected.value}`;
});