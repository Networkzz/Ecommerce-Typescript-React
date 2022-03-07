import { Request, Response } from "express";
import Product from "../models/product";

/*Obtain multiple product
async function to query all products since method findall() return a promise so async function is needed*/
export const getProducts = async( req: Request, res: Response ) => {

  const products = await Product.findAll(); //query all

  res.json({products,
  msg: "working"});
}
//Obtain product
export const getProduct = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const product = await Product.findByPk( id ); //query only id (Primary key)

  //if product is not found return a msg error
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      msg: `product with id ${id} not found`
    });
  }
  
  res.json(product)
}
//Create product
//full_name + email + password + country ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN product TO ADD A NEW product
export const postProduct = async( req: Request, res: Response ) => {

const { body } = req;

  try {
//Create product and insert body from the json request
    const product = Product.build(body);
    await product.save();

    res.json( product );

  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator'
    }) 
  }
}
//Update product
export const putProduct = async( req: Request, res: Response ) => {

  const { id } = req.params;
  const { body } = req;

  try {
    
    const product  = await Product.findByPk(id);
    if(!product) {
      return res.status(404).json({
        msg: `product with id ${id} doesn't exist`
      })
    }
//Update and return product updated
    await product.update( body );
    
    res.json( product );
    
      } catch (error) {
        console.log(error)
        res.status(500).json({
          msg: 'Talk to the administrator'
        }) 
      }
}
//Delete product
export const deleteProduct = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const product  = await Product.findByPk(id);
    if(!product) {
      return res.status(404).json({
        msg: `product with id ${id} doesn't exist`
      })
    }
//Physical delete from database -> delete entire row from database
  await product.destroy()

  res.json(product)
}