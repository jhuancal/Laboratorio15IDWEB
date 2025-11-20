const seccion = document.getElementById("miSeccion");

const h2Original = seccion.querySelector("h2");
if (h2Original) h2Original.remove();

const nuevoH2 = document.createElement("h2");
nuevoH2.textContent = "Titulo nuevo";
seccion.appendChild(nuevoH2);

const nuevoP = document.createElement("p");
nuevoP.textContent = "Descripcion generada";
seccion.appendChild(nuevoP);

const lista = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    lista.appendChild(li);
}
seccion.appendChild(lista);
