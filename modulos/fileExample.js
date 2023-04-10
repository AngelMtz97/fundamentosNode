const fs = require('fs').promises;

async function escribir(path, contenido){
    try{
        await fs.writeFile(path, contenido);
    }catch(error){
        console.error(error);
    }
}

async function leer(path){
    try{
        const data = await  fs.readFile(path, {encoding: 'utf-8'});
        return data.toString();
    }catch(error){
        console.error(error);
    }
}

function borrar(path){
    try {
        fs.unlink(path);
    } catch (error) {
        console.error(error);
    }
}

exports.escribir = escribir;
exports.leer = leer;
exports.borrar = borrar;