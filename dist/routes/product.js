"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const router_product = (0, express_1.Router)();
router_product.get('/', products_1.getProducts); //Get multiple Products
router_product.get('/:id', products_1.getProduct); //Get Product from id 
router_product.post('/', products_1.postProduct); //Create Product
router_product.put('/:id', products_1.putProduct); //Update Product
router_product.delete('/:id', products_1.deleteProduct); //Delete Product
exports.default = router_product;
//# sourceMappingURL=product.js.map