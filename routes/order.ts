import { Router } from "express";
import { deleteOrder, getOrder, getOrders, postOrder, putOrder } from "../controllers/orders";

const router_order = Router();

router_order.get('/',    getOrders); //Get multiple orders
router_order.get('/:id', getOrder); //Get order from id 
router_order.post('/',   postOrder); //Create order
router_order.put('/:id', putOrder); //Update order
router_order.delete('/:id', deleteOrder); //Delete order

export default router_order;