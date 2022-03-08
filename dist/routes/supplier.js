"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const suppliers_1 = require("../controllers/suppliers");
const router_Supplier = (0, express_1.Router)();
router_Supplier.get('/', suppliers_1.getSuppliers); //Get multiple Suppliers
router_Supplier.get('/:id', suppliers_1.getSupplier); //Get Supplier from id 
router_Supplier.post('/', suppliers_1.postSupplier); //Create Supplier
router_Supplier.put('/:id', suppliers_1.putSupplier); //Update Supplier
router_Supplier.delete('/:id', suppliers_1.deleteSupplier); //Delete Supplier
exports.default = router_Supplier;
//# sourceMappingURL=supplier.js.map