const { exec, spawn } = require('child_process');
let comando = 'node ./modulos/consola.js';// 'ls -la';

/* exec(comando, (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
}); */

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log('¿Está muerto?')
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', () => {
    console.log('El proceso terminó')
    console.log(proceso.killed);
});