import { Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from "../controllers/products";

const router_product = Router();

router_product.get('/',    getProducts); //Get multiple Products
router_product.get('/:id', getProduct); //Get Product from id 
router_product.post('/',   postProduct); //Create Product
router_product.put('/:id', putProduct); //Update Product
router_product.delete('/:id', deleteProduct); //Delete Product

export default router_product;