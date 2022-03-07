import { Request, Response } from "express";
import Order_detail from "../models/order_detail";

/*Obtain multiple order_detail
async function to query all order_details since method findall() return a promise so async function is needed*/
export const getOrder_details = async( req: Request, res: Response ) => {

  const order_details = await Order_detail.findAll(); //query all

  res.json({order_details,
  msg: "working"});
}
//Obtain order_detail
export const getOrder_detail = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const order_detail = await Order_detail.findByPk( id ); //query only id (Primary key)

  //if order_detail is not found return a msg error
  if (order_detail) {
    res.json(order_detail);
  } else {
    res.status(404).json({
      msg: `order_detail with id ${id} not found`
    });
  }
  
  res.json(order_detail)
}
//Create order_detail
//full_name + email + password + country ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN order_detail TO ADD A NEW order_detail
export const postOrder_detail = async( req: Request, res: Response ) => {

const { body } = req;

  try {
//Create order_detail and insert body from the json request
    const order_detail = Order_detail.build(body);
    await order_detail.save();

    res.json( order_detail );

  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator'
    }) 
  }
}
//Update order_detail
export const putOrder_detail = async( req: Request, res: Response ) => {

  const { id } = req.params;
  const { body } = req;

  try {
    
    const order_detail  = await Order_detail.findByPk(id);
    if(!order_detail) {
      return res.status(404).json({
        msg: `order_detail with id ${id} doesn't exist`
      })
    }
//Update and return order_detail updated
    await order_detail.update( body );
    
    res.json( order_detail );
    
      } catch (error) {
        console.log(error)
        res.status(500).json({
          msg: 'Talk to the administrator'
        }) 
      }
}
//Delete order_detail
export const deleteOrder_detail = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const order_detail  = await Order_detail.findByPk(id);
    if(!order_detail) {
      return res.status(404).json({
        msg: `order_detail with id ${id} doesn't exist`
      })
    }
//Physical delete from database -> delete entire row from database
  await order_detail.destroy()

  res.json(order_detail)
}