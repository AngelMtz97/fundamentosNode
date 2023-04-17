console.log('Algo')
console.info('Algo')
console.error('Error')
console.warn('Advertencia')

var tabla = [
    {
        a : 1,
        b : 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]

console.table(tabla)
console.group('conver');
console.log('Hola');
console.group('bla');
console.log('Hola');
console.log('Hola');
console.groupEnd('bla');
console.groupEnd('conver');

function function1(){
   console.group('function 1');
   console.log('Esto es la funcion 1');
   console.log('Esto también')
   function2();
   console.groupEnd('function 1')
}

function function2(){
    console.group('function 2');
    console.log('Esto es la funcion 2');
    console.groupEnd('function 2');
}

console.log('Empezamos')
function1();

console.count('veces')
console.count('pollo')
console.count('veces')