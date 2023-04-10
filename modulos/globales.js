//console.log(global);
let i = 0;
let intervalo = setInterval(function(){
  console.log('Hola');
  i++;

  if(i === 3){
    clearInterval(intervalo);
  }
}, 1000);

setImmediate(function(){
    console.log('Inmediate')
})

console.log(__dirname);
console.log(__filename);

globalThis.miVariable = 'elValor';

console.log(miVariable);