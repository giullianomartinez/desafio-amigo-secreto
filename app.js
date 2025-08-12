let amigos = [];

function agregarAmigo() {
    textoIngresado = document.getElementById("amigo").value;

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

    let amigo;
    for (amigo of amigos) {
        lista.innerHTML += "<li>" + amigo + "</li>";
    }
}

