/*
Titulo: El Amigo Secreto
Creado por: Annye Julyeth Araque Acero
Grupo:G8
Programa: ONE - Oracle - Alura Latam
Fecha: 18/03/2025
*/

/*
    El programa consiste en: ingresar el nombre de los participantes y sortearlos entre ellos un nombre al azar quien será el amigo secreto.
*/

//Ingresar el nombre de los participantes

let nombres = [];

// Función para agregar un nombre
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    if (nombre) {
        nombres.push(nombre);
        mostrarNombres();
        inputNombre.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para mostrar los nombres en pantalla
function mostrarNombres() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = ""; // Limpiar la lista

    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        listaNombres.appendChild(li);
    });
}

// Función para sortear un nombre aleatorio
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres para sortear. Agrega al menos un nombre.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];
    alert(`El amigo secreto es... ${amigoSecreto}`);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    nombres = [];
    mostrarNombres();
    alert("El juego ha sido reiniciado.");
}