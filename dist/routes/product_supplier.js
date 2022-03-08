"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_suppliers_1 = require("../controllers/products_suppliers");
const router_Product_supplier = (0, express_1.Router)();
router_Product_supplier.get('/', products_suppliers_1.getProduct_suppliers); //Get multiple Product_suppliers
router_Product_supplier.get('/:id', products_suppliers_1.getProduct_supplier); //Get Product_supplier from id 
router_Product_supplier.post('/', products_suppliers_1.postProduct_supplier); //Create Product_supplier
router_Product_supplier.put('/:id', products_suppliers_1.putProduct_supplier); //Update Product_supplier
router_Product_supplier.delete('/:id', products_suppliers_1.deleteProduct_supplier); //Delete Product_supplier
exports.default = router_Product_supplier;
//# sourceMappingURL=product_supplier.js.map