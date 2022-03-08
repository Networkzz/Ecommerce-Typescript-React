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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
/*Obtain multiple user
async function to query all users since method findall() return a promise so async function is needed*/
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll(); //query all
    res.json({ users });
});
exports.getUsers = getUsers;
//Obtain user
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id); //query only id (Primary key)
    //if user is not found return a msg error
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            msg: `User with id ${id} not found`
        });
    }
    res.json(user);
});
exports.getUser = getUser;
//Create user
//full_name + shipping_adress + email + password + country ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN ORDER TO ADD A NEW USER
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //If email already exist since email is a unique row in the db
        const existEmail = yield user_1.default.findOne({
            where: {
                email: body.email
            }
        });
        //return msg to the user that this email already exists.
        if (existEmail) {
            return res.status(400).json({
                msg: `User with email ${body.email} already exists`
            });
        }
        //Create user and insert body from the json request
        const user = user_1.default.build(body);
        yield user.save();
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.postUser = postUser;
//Update user
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `User with id ${id} doesn't exist`
            });
        }
        //If email already exist since email is a unique row in the db
        const existEmail = yield user_1.default.findOne({
            where: {
                email: body.email
            }
        });
        //return msg to the user that this email already exists.
        if (existEmail) {
            return res.status(400).json({
                msg: `User with email ${body.email} already exists`
            });
        }
        //Update and return user updated
        yield user.update(body);
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.putUser = putUser;
//Delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `User with id ${id} doesn't exist`
        });
    }
    //Physical delete from database -> delete entire row from database
    yield user.destroy();
    res.json(user);
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map