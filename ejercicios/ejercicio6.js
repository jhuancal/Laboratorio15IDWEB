const divs = document.querySelectorAll("div");
const colores = ["lightblue", "lightgreen", "lightcoral"];

divs.forEach((div, i) => {
    div.style.backgroundColor = colores[i % colores.length];
});
