const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log('nueva petición!');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }
 
   /*  res.writeHead(201, { 'Content-Type': 'text/plain' });
    res.write('hola, ya se usar HTTP de NodeJS');
    
    res.end(); */
}

/* http.createServer(function (req, res){
   console.log('nueva petición!');
   console.log(req.url);

   res.writeHead(201, { 'Content-Type': 'text/plain' });
   res.write('hola, ya se usar HTTP de NodeJS');
   
   res.end();
}).listen(3000); */

console.log("Escuchando http en el puerto 3000");