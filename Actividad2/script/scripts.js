const contenedor = document.getElementById("puzzle-container");
const botonDesordenar = document.getElementById("shuffle-button");
const tamañoTablero = 4;
let piezas = [];

function crearPieza(numero) {
    const pieza = document.createElement("div");
    pieza.className = "puzzle-piece";
    pieza.textContent = numero;
    pieza.addEventListener("click", () => moverPieza(numero));
    return pieza;
}

function moverPieza(numero) {
    const indice = piezas.indexOf(numero);
    const indiceVacio = piezas.indexOf("");
    if (esAdyacente(indice, indiceVacio)) {
        piezas[indiceVacio] = numero;
        piezas[indice] = "";
        actualizarPuzzle();
    }
}

function esAdyacente(indice1, indice2) {
    const fila1 = Math.floor(indice1 / tamañoTablero);
    const columna1 = indice1 % tamañoTablero;
    const fila2 = Math.floor(indice2 / tamañoTablero);
    const columna2 = indice2 % tamañoTablero;
    const diferenciaFila = Math.abs(fila1 - fila2);
    const diferenciaColumna = Math.abs(columna1 - columna2);
    return (diferenciaFila === 1 && diferenciaColumna === 0) || (diferenciaFila === 0 && diferenciaColumna === 1);
}

function desordenarPiezas() {
    for (let i = piezas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [piezas[i], piezas[j]] = [piezas[j], piezas[i]];
    }
    actualizarPuzzle();
}

function actualizarPuzzle() {
    contenedor.innerHTML = "";
    piezas.forEach(pieza => {
        contenedor.appendChild(crearPieza(pieza));
    });
}

for (let i = 1; i <= tamañoTablero * tamañoTablero - 1; i++) {
    piezas.push(i);
}
piezas.push(""); 

desordenarPiezas();

botonDesordenar.addEventListener("click", () => {
    desordenarPiezas();
});

actualizarPuzzle();
