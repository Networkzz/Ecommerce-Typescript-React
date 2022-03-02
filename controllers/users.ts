import { Request, Response } from "express";

//Obtain multiple user
export const getUsers = ( req: Request, res: Response ) => {
  res.json({
    msg: 'getUsers'
  })
}
//Obtain user
export const getUser = ( req: Request, res: Response ) => {

  const { id } = req.params;
  
  res.json({
    msg: 'getUser',
    id
  })
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