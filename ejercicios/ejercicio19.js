const contenedor = document.getElementById("contenedor");

for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Parrafo " + i;
    contenedor.appendChild(p);
}

const segundo = contenedor.querySelectorAll("p")[1];
segundo.remove();
