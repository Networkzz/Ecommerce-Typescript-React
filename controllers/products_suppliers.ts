import { Request, Response } from "express";
import Product_supplier from "../models/product_supplier";

/*Obtain multiple product_supplier
async function to query all product_suppliers since method findall() return a promise so async function is needed*/
export const getProduct_suppliers = async( req: Request, res: Response ) => {

  const product_suppliers = await Product_supplier.findAll(); //query all

  res.json({product_suppliers,
  msg: "working"});
}
//Obtain product_supplier
export const getProduct_supplier = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const product_supplier = await Product_supplier.findByPk( id ); //query only id (Primary key)

  //if product_supplier is not found return a msg error
  if (product_supplier) {
    res.json(product_supplier);
  } else {
    res.status(404).json({
      msg: `product_supplier with id ${id} not found`
    });
  }
  
  res.json(product_supplier)
}
//Create product_supplier
//full_name + email + password + country ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN product_supplier TO ADD A NEW product_supplier
export const postProduct_supplier = async( req: Request, res: Response ) => {

const { body } = req;

  try {
//Create product_supplier and insert body from the json request
    const product_supplier = Product_supplier.build(body);
    await product_supplier.save();

    res.json( product_supplier );

  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator'
    }) 
  }
}
//Update product_supplier
export const putProduct_supplier = async( req: Request, res: Response ) => {

  const { id } = req.params;
  const { body } = req;

  try {
    
    const product_supplier  = await Product_supplier.findByPk(id);
    if(!product_supplier) {
      return res.status(404).json({
        msg: `product_supplier with id ${id} doesn't exist`
      })
    }
//Update and return product_supplier updated
    await product_supplier.update( body );
    
    res.json( product_supplier );
    
      } catch (error) {
        console.log(error)
        res.status(500).json({
          msg: 'Talk to the administrator'
        }) 
      }
}
//Delete product_supplier
export const deleteProduct_supplier = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const product_supplier  = await Product_supplier.findByPk(id);
    if(!product_supplier) {
      return res.status(404).json({
        msg: `product_supplier with id ${id} doesn't exist`
      })
    }
//Physical delete from database -> delete entire row from database
  await product_supplier.destroy()

  res.json(product_supplier)
}