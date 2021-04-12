// aquí tu servidor
// Debe recibir peticiones al endpoint '/comprobarDNI'
// Devuelve un error 404 en cualquier otro caso
// El servidor debe procesar los parámetros de la QueryString. Mirad otros ejemplos de como hacerlo en ejercicios anteriores.

const http = require('http')

const DNI = require('./DNI')

http.createServer((req, res) => {
    console.log('peticion recibida:' + req.url)
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
    };
    res.writeHead(200, headers)

    const esDniValido = new DNI("Test", '40538588A', '2022-12-12').esDniValido()

    res.end(JSON.stringify({esDniValido: esDniValido}));
    return;
}).listen(3000)

