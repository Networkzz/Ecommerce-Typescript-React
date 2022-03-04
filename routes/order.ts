import { Router } from "express";
import { deleteOrder, getOrder, getOrders, postOrder, putOrder } from "../controllers/orders";

const router_order = Router();

router_order.get('/',    getOrders); //Get multiple users
router_order.get('/:id', getOrder); //Get user from id 
router_order.post('/',   postOrder); //Create user
router_order.put('/:id', putOrder); //Update user
router_order.delete('/', deleteOrder); //Delete user

export default router_order;