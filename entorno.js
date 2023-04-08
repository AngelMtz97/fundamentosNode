let nombre = process.env.NOMBRE || 'Angel'; // Las variables de entrono se ubican en el equipo
// En windows se puede usar $env:NOMBRE = "Angel"
console.log("! Hola "+nombre);