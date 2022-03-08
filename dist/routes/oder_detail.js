"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_1 = require("../controllers/orders");
const router_order = (0, express_1.Router)();
router_order.get('/', orders_1.getOrders); //Get multiple orders
router_order.get('/:id', orders_1.getOrder); //Get order from id 
router_order.post('/', orders_1.postOrder); //Create order
router_order.put('/:id', orders_1.putOrder); //Update order
router_order.delete('/:id', orders_1.deleteOrder); //Delete order
exports.default = router_order;
//# sourceMappingURL=oder_detail.js.map