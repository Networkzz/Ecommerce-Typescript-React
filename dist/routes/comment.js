"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_1 = require("../controllers/comments");
const router_Comment = (0, express_1.Router)();
router_Comment.get('/', comments_1.getComments); //Get multiple Comments
router_Comment.get('/:id', comments_1.getComment); //Get Comment from id 
router_Comment.post('/', comments_1.postComment); //Create Comment
router_Comment.put('/:id', comments_1.putComment); //Update Comment
router_Comment.delete('/:id', comments_1.deleteComment); //Delete Comment
exports.default = router_Comment;
//# sourceMappingURL=comment.js.map