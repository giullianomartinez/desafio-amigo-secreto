let amigos = [];

function agregarAmigo() {
    textoIngresado = document.getElementById("amigo").value;

    if (textoIngresado) {
        amigos.push(textoIngresado);
    } else {
        alert("Por favor, inserte un nombre.");
    }

    let caja = document.querySelector("#amigo");
    caja.value = "";
    console.log(amigos);
}




