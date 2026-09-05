import http from 'node:http';
import userRouter from './routes/user.route.js';


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
    userRouter (request, response);

}).listen(3000);
