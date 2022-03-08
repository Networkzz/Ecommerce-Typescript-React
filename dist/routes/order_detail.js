"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_details_1 = require("../controllers/orders_details");
const router_order_detail = (0, express_1.Router)();
router_order_detail.get('/', orders_details_1.getOrder_details); //Get multiple Order_details
router_order_detail.get('/:id', orders_details_1.getOrder_detail); //Get Order_detail from id 
router_order_detail.post('/', orders_details_1.postOrder_detail); //Create Order_detail
router_order_detail.put('/:id', orders_details_1.putOrder_detail); //Update Order_detail
router_order_detail.delete('/:id', orders_details_1.deleteOrder_detail); //Delete Order_detail
exports.default = router_order_detail;
//# sourceMappingURL=order_detail.js.map