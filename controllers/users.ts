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
//full_name + shipping_adress + email + password + country ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN ORDER TO ADD A NEW USER
export const postUser = async( req: Request, res: Response ) => {

const { body } = req;

  try {
//If email already exist since email is a unique row in the db
    const existEmail = await User.findOne({
      where: {
        email: body.email
      }
    });
//return msg to the user that this email already exists.
    if(existEmail) {
      return res.status(400).json({
        msg: `User with email ${body.email} already exists`
      })
    }
//Create user and insert body from the json request
    const user = User.build(body);
    await user.save();

    res.json( user );

  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator'
    }) 
  }
}
//Update user
export const putUser = async( req: Request, res: Response ) => {

  const { id } = req.params;
  const { body } = req;

  try {
    
    const user  = await User.findByPk(id);
    if(!user) {
      return res.status(404).json({
        msg: `User with id ${id} doesn't exist`
      })
    }
//If email already exist since email is a unique row in the db
    const existEmail = await User.findOne({
      where: {
        email: body.email
      }
    });
//return msg to the user that this email already exists.
    if(existEmail) {
      return res.status(400).json({
        msg: `User with email ${body.email} already exists`
      })
    }
//Update and return user updated
    await user.update( body );
    
    res.json( user );
    
      } catch (error) {
        console.log(error)
        res.status(500).json({
          msg: 'Talk to the administrator'
        }) 
      }
}
//Delete user
export const deleteUser = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const user  = await User.findByPk(id);
    if(!user) {
      return res.status(404).json({
        msg: `User with id ${id} doesn't exist`
      })
    }
//Physical delete from database -> delete entire row from database
  await user.destroy()

  res.json(user)
}