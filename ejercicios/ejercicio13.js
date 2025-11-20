const primerArticulo = document.querySelector("article");
const clon = primerArticulo.cloneNode(true);
document.querySelector("main").appendChild(clon);
