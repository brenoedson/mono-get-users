import { getAllUsers } from '../controllers/user.controller.js';

export default function userRouter(request, response){
    if (request.method === 'GET') return getAllUsers(response);
}