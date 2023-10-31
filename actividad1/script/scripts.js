const estudiantes = [];

function agregarEstudiante() {
  const nuevoEstudiante = new Map();
  const nombre = document.getElementById('nombre').value;
  const edad = parseInt(document.getElementById('edad').value);
  const grado = document.getElementById('grado').value;
  const calificacionesInput = document.getElementById('calificaciones').value;
  const calificaciones = calificacionesInput.split(',').map(Number);
  
  nuevoEstudiante.set('nombre', nombre);
  nuevoEstudiante.set('edad', edad);
  nuevoEstudiante.set('grado', grado);
  nuevoEstudiante.set('calificaciones', calificaciones);
  
  estudiantes.push(nuevoEstudiante);
  document.getElementById('estudiantes-info').innerText = 'Estudiante agregado con éxito.';
}

function mostrarEstudiantes() {
  let estudiantesInfo = "Información de los estudiantes:\n";
  for (const estudiante of estudiantes) {
    estudiantesInfo += `Nombre: ${estudiante.get('nombre')}\n`;
    estudiantesInfo += `Edad: ${estudiante.get('edad')}\n`;
    estudiantesInfo += `Grado: ${estudiante.get('grado')}\n`;
    estudiantesInfo += `Calificaciones: ${estudiante.get('calificaciones').join(', ')}\n`;
    estudiantesInfo += '---------------------------------\n';
  }
  document.getElementById('estudiantes-info').innerText = estudiantesInfo;
}

function calcularPromedio() {
  const nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
  const estudiante = estudiantes.find(e => e.get('nombre') === nombreEstudiante);
  
  if (estudiante) {
    const calificaciones = estudiante.get('calificaciones');
    const promedio = calificaciones.reduce((total, calificacion) => total + calificacion, 0) / calificaciones.length;
    document.getElementById('promedio-info').innerText = `El promedio de calificaciones de ${nombreEstudiante} es: ${promedio}`;
  } else {
    document.getElementById('promedio-info').innerText = `Estudiante con nombre ${nombreEstudiante} no encontrado.`;
  }
}

document.getElementById('agregar-btn').addEventListener('click', agregarEstudiante);
document.getElementById('mostrar-btn').addEventListener('click', mostrarEstudiantes);
document.getElementById('calcular-btn').addEventListener('click', calcularPromedio);
