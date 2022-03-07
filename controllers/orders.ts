import { Request, Response } from "express";
import Order from "../models/order";

/*Obtain multiple order
async function to query all orders since method findall() return a promise so async function is needed*/
export const getOrders = async( req: Request, res: Response ) => {

  const orders = await Order.findAll(); //query all

  res.json({orders,
  msg: "working"});
}
//Obtain order
export const getOrder = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const order = await Order.findByPk( id ); //query only id (Primary key)

  //if order is not found return a msg error
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({
      msg: `order with id ${id} not found`
    });
  }
  
  res.json(order)
}
//Create order
//status + amount + shipping_adress + user_id ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN ORDER TO ADD A NEW order
export const postOrder = async( req: Request, res: Response ) => {

const { body } = req;

  try {
//Create order and insert body from the json request
    const order = Order.build(body);
    await order.save();

    res.json( order );

  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator'
    }) 
  }
}
//Update order
export const putOrder = async( req: Request, res: Response ) => {

  const { id } = req.params;
  const { body } = req;

  try {
    
    const order  = await Order.findByPk(id);
    if(!order) {
      return res.status(404).json({
        msg: `order with id ${id} doesn't exist`
      })
    }
//Update and return order updated
    await order.update( body );
    
    res.json( order );
    
      } catch (error) {
        console.log(error)
        res.status(500).json({
          msg: 'Talk to the administrator'
        }) 
      }
}
//Delete order
export const deleteOrder = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const order  = await Order.findByPk(id);
    if(!order) {
      return res.status(404).json({
        msg: `order with id ${id} doesn't exist`
      })
    }
//Physical delete from database -> delete entire row from database
  await order.destroy()

  res.json(order)
}