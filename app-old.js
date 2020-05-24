const http = require('http');

//request(solicitudes), respuestas
http.createServer((req, res) => {

        //status 200 => todo esta bien
        res.writeHead(200, { 'Content-type': 'application/json' });

        let salida = {
            nombre: 'kevinsito',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end(); //para terminar la respuesta y no quede el loop

    })
    //declaramos el puerto donde ejecutaremos la app
    .listen(8080);

console.log('escuchando el puerto 8080');