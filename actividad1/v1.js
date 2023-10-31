const estudiantes = [];

function agregarEstudiante() {
  const nuevoEstudiante = new Map();
  const nombre = prompt("Ingrese el nombre del estudiante:");
  const edad = parseInt(prompt("Ingrese la edad del estudiante:"));
  const grado = prompt("Ingrese el grado del estudiante:");
  const calificacionesInput = prompt("Ingrese las calificaciones del estudiante (separadas por comas):");
  const calificaciones = calificacionesInput.split(',').map(Number);
  
  nuevoEstudiante.set('nombre', nombre);
  nuevoEstudiante.set('edad', edad);
  nuevoEstudiante.set('grado', grado);
  nuevoEstudiante.set('calificaciones', calificaciones);
  
  estudiantes.push(nuevoEstudiante);
  console.log('Estudiante agregado con éxito.');
}

function mostrarEstudiantes() {
  console.log("Información de los estudiantes:");
  for (const estudiante of estudiantes) {
    console.log(`Nombre: ${estudiante.get('nombre')}`);
    console.log(`Edad: ${estudiante.get('edad')}`);
    console.log(`Grado: ${estudiante.get('grado')}`);
    console.log(`Calificaciones: ${estudiante.get('calificaciones').join(', ')}`);
    console.log('---------------------------------');
  }
}

function calcularPromedio() {
  const nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
  const estudiante = estudiantes.find(e => e.get('nombre') === nombreEstudiante);
  
  if (estudiante) {
    const calificaciones = estudiante.get('calificaciones');
    const promedio = calificaciones.reduce((total, calificacion) => total + calificacion, 0) / calificaciones.length;
    console.log(`El promedio de calificaciones de ${nombreEstudiante} es: ${promedio}`);
  } else {
    console.log(`Estudiante con nombre ${nombreEstudiante} no encontrado.`);
  }
}

function menuPrincipal() {
  while (true) {
    const opcion = prompt("Seleccione una opción:\n1. Añadir un nuevo estudiante\n2. Mostrar la información de todos los estudiantes\n3. Calcular el promedio de calificaciones de un estudiante\n4. Salir del programa");
    
    switch (opcion) {
      case '1':
        agregarEstudiante();
        break;
      case '2':
        mostrarEstudiantes();
        break;
      case '3':
        calcularPromedio();
        break;
      case '4':
        return;
      default:
        console.log("Opción no válida. Por favor, elija una opción válida.");
    }
  }
}

menuPrincipal();
