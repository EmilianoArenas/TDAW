const container = document.getElementById("puzzle-container");
const shuffleButton = document.getElementById("shuffle-button");
const gridSize = 4;
let pieces = [];

// Función para crear una pieza de puzzle
function createPiece(number) {
    const piece = document.createElement("div");
    piece.className = "puzzle-piece";
    piece.textContent = number;
    piece.addEventListener("click", () => movePiece(number));
    return piece;
}

// Función para mover una pieza de puzzle
function movePiece(number) {
    const index = pieces.indexOf(number);
    const emptyIndex = pieces.indexOf("");
    if (isAdjacent(index, emptyIndex)) {
        pieces[emptyIndex] = number;
        pieces[index] = "";
        updatePuzzle();
    }
}

// Función para verificar si dos piezas son adyacentes
function isAdjacent(index1, index2) {
    const row1 = Math.floor(index1 / gridSize);
    const col1 = index1 % gridSize;
    const row2 = Math.floor(index2 / gridSize);
    const col2 = index2 % gridSize;
    const rowDiff = Math.abs(row1 - row2);
    const colDiff = Math.abs(col1 - col2);
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
}

// Función para desordenar las piezas del puzzle
function shufflePieces() {
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }
    updatePuzzle();
}

// Función para actualizar el puzzle en el DOM
function updatePuzzle() {
    container.innerHTML = "";
    pieces.forEach(piece => {
        container.appendChild(createPiece(piece));
    });
}

// Inicialización del puzzle
for (let i = 1; i <= gridSize * gridSize - 1; i++) {
    pieces.push(i);
}
pieces.push(""); // Casilla en blanco

shufflePieces(); // Desordenar las piezas al cargar la página

shuffleButton.addEventListener("click", () => {
    shufflePieces();
});

updatePuzzle();
