console.log("Hola mundo")

let i = 0;
setInterval(function(){
  // console.log("Sigo activo");
  console.log(i);
  i++;

  if(i === 5){
    var a = 3 + z;
    // En caso de que haya un error, todo el proceso se detiene incluso los hilos
    // Por ello es peligroso, debemos manejar los errores
  }

}, 1000);

console.log("Segunda instruccion")