const lista = document.querySelector("ul");
const ultimo = lista.lastElementChild;
lista.insertBefore(ultimo, lista.firstElementChild);
