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
    response.writeHead(200, {"content-type": "application/json"});
    response.end(JSON.stringify(users));
}).listen(3000);
