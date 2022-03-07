import { Router } from "express";
import { deleteProduct_supplier, getProduct_supplier, getProduct_suppliers, postProduct_supplier, putProduct_supplier } from "../controllers/products_suppliers";

const router_Product_supplier = Router();

router_Product_supplier.get('/',    getProduct_suppliers); //Get multiple Product_suppliers
router_Product_supplier.get('/:id', getProduct_supplier); //Get Product_supplier from id 
router_Product_supplier.post('/',   postProduct_supplier); //Create Product_supplier
router_Product_supplier.put('/:id', putProduct_supplier); //Update Product_supplier
router_Product_supplier.delete('/:id', deleteProduct_supplier); //Delete Product_supplier

export default router_Product_supplier;