import http from 'node:http';

const users = [{
    name: 'Breno',
    email: 'brenoedson@gmail.com'
}, {
    name: 'Linus',
    email: 'linusedson201011@gmail.com'
}, {
    name: 'Alex',
    email: 'alex@gmail.com'
}];


http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if (request.url !== '/users'){
        response.writeHead(404, {"content-type": "application/json"});
        response.end(JSON.stringify({
            error: 404,
            message: 'Recurso não enocntrado.'
        }));
        return;
    }
    else {
        response.writeHead(200, {"content-type": "application/json"});
        response.end(JSON.stringify(users));
    }

}).listen(3000);
