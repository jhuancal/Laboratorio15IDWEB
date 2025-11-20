const primerParrafo = document.querySelector("p");
const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Nuevo h3";
document.body.insertBefore(nuevoH3, primerParrafo);
