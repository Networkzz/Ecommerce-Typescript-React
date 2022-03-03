import { Request, Response } from "express";
import User from "../models/user";

/*Obtain multiple user
async function to query all users since method findall() return a promise so async function is needed*/
export const getUsers = async( req: Request, res: Response ) => {

  const users = await User.findAll(); //query all

  res.json({users});
}
//Obtain user
export const getUser = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const user = await User.findByPk( id ); //query only id (Primary key)

  //if user is not found return a msg error
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      msg: `User with id ${id} not found`
    });
  }
  
  res.json(user)
}
//Create user
export const postUser = ( req: Request, res: Response ) => {

  const { body } = req;

  res.json({
    msg: 'postUser',
    body
  })
}
//Update user
export const putUser = ( req: Request, res: Response ) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: 'postUser',
    body
  })
}
//Delete user
export const deleteUser = ( req: Request, res: Response ) => {

  const { id } = req.params;

  res.json({
    msg: 'deleteUser',
    id
  })
}