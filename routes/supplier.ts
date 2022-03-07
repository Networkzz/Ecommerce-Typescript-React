import { Router } from "express";
import { deleteSupplier, getSupplier, getSuppliers, postSupplier, putSupplier } from "../controllers/suppliers";

const router_Supplier = Router();

router_Supplier.get('/',    getSuppliers); //Get multiple Suppliers
router_Supplier.get('/:id', getSupplier); //Get Supplier from id 
router_Supplier.post('/',   postSupplier); //Create Supplier
router_Supplier.put('/:id', putSupplier); //Update Supplier
router_Supplier.delete('/:id', deleteSupplier); //Delete Supplier

export default router_Supplier;