let amigos = [];
let numSorteados = [];

function agregarAmigo() {
    let textoIngresado = document.getElementById("amigo").value;

    if (textoIngresado) {
        amigos.push(textoIngresado);
        actualizarAmigos();
    } else {
        alert("Por favor, inserte un nombre.");
    }

    let caja = document.querySelector("#amigo");
    caja.value = "";
}


function actualizarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        lista.innerHTML += "<li>" + amigo + "</li>";
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    console.log(indiceAleatorio);

    if (numSorteados.length == amigos.length) {
        alert("Se sortearon todos los nombres");
        limpiarListaAmigos();
        return;
    }

    if (numSorteados.includes(indiceAleatorio)){
        return sortearAmigo();
    } else {
        numSorteados.push(indiceAleatorio);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ` Tu amigo secreto es: ${amigoSorteado}`;
}


function limpiarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}


