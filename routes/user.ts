import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUser } from "../controllers/users";

const router = Router();

router.get('/',    getUsers); //Get multiple users
router.get('/:id', getUser); //Get user from id 
router.post('/',   postUser); //Create user
router.put('/:id', putUser); //Update user
router.delete('/', deleteUser); //Delete user












export default router;