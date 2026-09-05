import { findAllUser } from '../services/user.service.js';

export function getAllUsers(response){
    const users = findAllUser();

    response.writeHead(200, {"content-type": "application/json"});
    response.end(JSON.stringify(users));
}