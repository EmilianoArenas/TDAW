const entradaTarea = document.getElementById("tarea");
const botonTarea = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

function agregarElemento() {
    const textoTarea = entradaTarea.value;

    if (textoTarea.trim() !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;

        nuevaTarea.addEventListener("click", function () {
            nuevaTarea.classList.toggle("completada");
        });

        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener("click", function () {
            listaTareas.removeChild(nuevaTarea);
        });

        nuevaTarea.appendChild(eliminarBtn);

        listaTareas.appendChild(nuevaTarea);
        entradaTarea.value = ""; 
    }
}

botonTarea.addEventListener("click", agregarElemento);
