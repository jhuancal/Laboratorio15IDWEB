const parrafo = document.getElementById("parrafo");
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Parrafo reemplazado";
parrafo.replaceWith(nuevoDiv);
