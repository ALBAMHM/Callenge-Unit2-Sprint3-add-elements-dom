 // Aquí tu código

const agregar= document.getElementById("agregar");
const lista= document.getElementById("lista");


agregar.addEventListener("click", function() {
    let numero = prompt("Inserte número deseado :)");
    let agregalista = document.createElement("li");
    lista.appendChild(agregalista);
    agregalista.textContent= numero;
});