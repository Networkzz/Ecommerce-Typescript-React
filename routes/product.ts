import { Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from "../controllers/products";

const router_Product = Router();

router_Product.get('/',    getProducts); //Get multiple Products
router_Product.get('/:id', getProduct); //Get Product from id 
router_Product.post('/',   postProduct); //Create Product
router_Product.put('/:id', putProduct); //Update Product
router_Product.delete('/:id', deleteProduct); //Delete Product

export default router_Product;