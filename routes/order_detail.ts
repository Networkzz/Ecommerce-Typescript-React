import { Router } from "express";
import { deleteOrder_detail, getOrder_detail, getOrder_details, postOrder_detail, putOrder_detail } from "../controllers/orders_details";

const router_order_detail = Router();

router_order_detail.get('/',    getOrder_details); //Get multiple Order_details
router_order_detail.get('/:id', getOrder_detail); //Get Order_detail from id 
router_order_detail.post('/',   postOrder_detail); //Create Order_detail
router_order_detail.put('/:id', putOrder_detail); //Update Order_detail
router_order_detail.delete('/:id', deleteOrder_detail); //Delete Order_detail

export default router_order_detail;