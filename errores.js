function otraFunction(){
    serompe();
}

function serompe(){
    return 3+z;
}

function seRompeAsync(){
    setTimeout(function(){
        try{
        return 3+z;
        }catch(err){
            console.error('Error en mi funcion asincrona');
        }
    }, 1000);
}

try{
 // serompe();
 // otraFunction()
 seRompeAsync();
}catch(err){
    console.error('Vaya algo se ha roto');
    console.error(err.message);
}

console.log('Esto de aquí está al final, si hay error no llega');