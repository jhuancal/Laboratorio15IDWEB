const divs = document.querySelectorAll("div");
const cantidad = divs.length;

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Cantidad de divs: " + cantidad;
document.body.appendChild(nuevoParrafo);
