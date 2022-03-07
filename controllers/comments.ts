import { Request, Response } from "express";
import Comment from "../models/comment";

/*Obtain multiple comment
async function to query all comments since method findall() return a promise so async function is needed*/
export const getComments = async( req: Request, res: Response ) => {

  const comments = await Comment.findAll(); //query all

  res.json({comments,
  msg: "working"});
}
//Obtain comment
export const getComment = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const comment = await Comment.findByPk( id ); //query only id (Primary key)

  //if comment is not found return a msg error
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({
      msg: `comment with id ${id} not found`
    });
  }
  
  res.json(comment)
}
//Create comment
//full_name + email + password + country ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN comment TO ADD A NEW comment
export const postComment = async( req: Request, res: Response ) => {

const { body } = req;

  try {
//Create comment and insert body from the json request
    const comment = Comment.build(body);
    await comment.save();

    res.json( comment );

  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrator'
    }) 
  }
}
//Update comment
export const putComment = async( req: Request, res: Response ) => {

  const { id } = req.params;
  const { body } = req;

  try {
    
    const comment  = await Comment.findByPk(id);
    if(!comment) {
      return res.status(404).json({
        msg: `comment with id ${id} doesn't exist`
      })
    }
//Update and return comment updated
    await comment.update( body );
    
    res.json( comment );
    
      } catch (error) {
        console.log(error)
        res.status(500).json({
          msg: 'Talk to the administrator'
        }) 
      }
}
//Delete comment
export const deleteComment = async( req: Request, res: Response ) => {

  const { id } = req.params;

  const comment  = await Comment.findByPk(id);
    if(!comment) {
      return res.status(404).json({
        msg: `comment with id ${id} doesn't exist`
      })
    }
//Physical delete from database -> delete entire row from database
  await comment.destroy()

  res.json(comment)
}