import { Request, Response } from "express";
import Supplier from "../models/supplier";

/*Obtain multiple supplier
async function to query all suppliers since method findall() return a promise so async function is needed*/
export const getSuppliers = async( req: Request, res: Response ) => {

  const suppliers = await Supplier.findAll(); //query all

  res.json({suppliers,
  msg: "working"});
}
//Obtain supplier
export const getSupplier = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const supplier = await Supplier.findByPk( id ); //query only id (Primary key)

  //if supplier is not found return a msg error
  if (supplier) {
    res.json(supplier);
  } else {
    res.status(404).json({
      msg: `supplier with id ${id} not found`
    });
  }
  
  res.json(supplier)
}
//Create supplier
//name + country ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN supplier TO ADD A NEW supplier
export const postSupplier = async( req: Request, res: Response ) => {

const { body } = req;

  try {
//Create supplier and insert body from the json request
    const supplier = Supplier.build(body);
    await supplier.save();

    res.json( supplier );

  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator'
    }) 
  }
}
//Update supplier
export const putSupplier = async( req: Request, res: Response ) => {

  const { id } = req.params;
  const { body } = req;

  try {
    
    const supplier  = await Supplier.findByPk(id);
    if(!supplier) {
      return res.status(404).json({
        msg: `supplier with id ${id} doesn't exist`
      })
    }
//Update and return supplier updated
    await supplier.update( body );
    
    res.json( supplier );
    
      } catch (error) {
        console.log(error)
        res.status(500).json({
          msg: 'Talk to the administrator'
        }) 
      }
}
//Delete supplier
export const deleteSupplier = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const supplier  = await Supplier.findByPk(id);
    if(!supplier) {
      return res.status(404).json({
        msg: `supplier with id ${id} doesn't exist`
      })
    }
//Physical delete from database -> delete entire row from database
  await supplier.destroy()

  res.json(supplier)
}