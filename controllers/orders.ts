import { Request, Response } from "express";
import Order from "../models/order";
import User from "../models/user";

/*Obtain multiple order
async function to query all orders since method findall() return a promise so async function is needed*/
export const getOrders = async( req: Request, res: Response ) => {

  const orders = await Order.findAll(); //query all

  res.json({orders,
  msg: "Hola funciono"});
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
export const postOrder = async( req: Request, res: Response ) => {

  const { body } = req;

}
//Update order
export const putOrder = ( req: Request, res: Response ) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: 'postorder',
    body
  })
}
//Delete order
export const deleteOrder = ( req: Request, res: Response ) => {

  const { id } = req.params;

  res.json({
    msg: 'deleteorder',
    id
  })
}