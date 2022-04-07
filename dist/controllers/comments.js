"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.putComment = exports.postComment = exports.getComment = exports.getComments = void 0;
const comment_1 = __importDefault(require("../models/comment"));
/*Obtain multiple comment
async function to query all comments since method findall() return a promise so async function is needed*/
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield comment_1.default.findAll(); //query all
    res.json({ comments,
        msg: "working" });
});
exports.getComments = getComments;
//Obtain comment
const getComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const comment = yield comment_1.default.findByPk(id); //query only id (Primary key)
    //if comment is not found return a msg error
    if (comment) {
        res.json(comment);
    }
    else {
        res.status(404).json({
            msg: `comment with id ${id} not found`
        });
    }
    res.json(comment);
});
exports.getComment = getComment;
//Create comment
//content + product_id ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN comment TO ADD A NEW comment
const postComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //Create comment and insert body from the json request
        const comment = comment_1.default.build(body);
        yield comment.save();
        res.json(comment);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.postComment = postComment;
//Update comment
const putComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const comment = yield comment_1.default.findByPk(id);
        if (!comment) {
            return res.status(404).json({
                msg: `comment with id ${id} doesn't exist`
            });
        }
        //Update and return comment updated
        yield comment.update(body);
        res.json(comment);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.putComment = putComment;
//Delete comment
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const comment = yield comment_1.default.findByPk(id);
    if (!comment) {
        return res.status(404).json({
            msg: `comment with id ${id} doesn't exist`
        });
    }
    //Physical delete from database -> delete entire row from database
    yield comment.destroy();
    res.json(comment);
});
exports.deleteComment = deleteComment;
//# sourceMappingURL=comments.js.map