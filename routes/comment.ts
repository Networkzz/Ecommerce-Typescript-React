import { Router } from "express";
import { deleteComment, getComment, getComments, postComment, putComment } from "../controllers/comments";

const router_Comment = Router();

router_Comment.get('/',    getComments); //Get multiple Comments
router_Comment.get('/:id', getComment); //Get Comment from id 
router_Comment.post('/',   postComment); //Create Comment
router_Comment.put('/:id', putComment); //Update Comment
router_Comment.delete('/:id', deleteComment); //Delete Comment

export default router_Comment;