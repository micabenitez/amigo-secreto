let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombre);
    limpiarInput();
    mostrarAmigos();
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    limpiarLista();

    if(amigos.length === 0){
        alert('No hay amigos para sortear. Por favor, agregue al menos un amigo.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    console.log(indiceAleatorio);
    let amigo = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo sorteado es: ${amigo}`;
}

function limpiarLista() {
    document.getElementById('listaAmigos').innerHTML = '';
}

function mostrarAmigos() {
    limpiarLista();
    let lista =  document.getElementById('listaAmigos');
    
    for (let i = 0; i < amigos.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = amigos[i];
        lista.appendChild(listItem);
    }
}





