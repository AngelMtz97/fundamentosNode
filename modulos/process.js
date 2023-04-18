// const process = require('process');
process.on('beforeExit', () =>{
    console.log('Angel, el proceso va a terminar');
})

process.on('exit', () =>{
    console.log('El proceso acabó');
    setTimeout(()=>{
        console.log('Esto no se va a ver nunca')
    }, 0)
})

process.on('uncaughtException', (err, origen) =>{
  console.log('Vaya se nos ha olvido capturar un error');
  console.error(err);
})

process.on('uncaughtRejection', ()=>{

})

// imprimir();
setTimeout(()=>{
    console.log('Esto se va a ejecutar')
}, 1000)

console.log('Esto si el error no se recoje, no sale');