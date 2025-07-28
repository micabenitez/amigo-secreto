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
    if(amigos-length === 0){
        alert('No hay amigos para sortear. Por favor, agregue al menos un amigo.');
        return;
    }
    let amigo = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo sorteado es: ${amigo}`;
}

function mostrarAmigos() {
    let lista =  document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = amigos[i];
        lista.appendChild(listItem);
    }
}





