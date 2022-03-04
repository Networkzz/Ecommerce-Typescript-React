import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUser } from "../controllers/users";

const router_user = Router();

router_user.get('/',    getUsers); //Get multiple users
router_user.get('/:id', getUser); //Get user from id 
router_user.post('/',   postUser); //Create user
router_user.put('/:id', putUser); //Update user
router_user.delete('/:id', deleteUser); //Delete user

export default router_user;