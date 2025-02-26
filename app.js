let nombresAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let nombreInsertado = document.getElementById('amigo').value;
    if (nombreInsertado.trim() === '') {
        alert('Por favor, inserte un nombre.')
        return;
    } else {
        nombresAmigos.push(nombreInsertado);
    }

    // Limpia el campo de entrada
    document.querySelector('#amigo').value = '';
    actualizarListaDeAmigos();
}


// Función para actualizar la lista de amigos
function actualizarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < nombresAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombresAmigos[i];
        listaAmigos.appendChild(li);
    }    
}


// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert('No hay amigos disponibles para el sorteo.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    let amigoSorteado = nombresAmigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`
}
