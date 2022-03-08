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
exports.deleteOrder = exports.putOrder = exports.postOrder = exports.getOrder = exports.getOrders = void 0;
const order_1 = __importDefault(require("../models/order"));
/*Obtain multiple order
async function to query all orders since method findall() return a promise so async function is needed*/
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_1.default.findAll(); //query all
    res.json({ orders,
        msg: "working" });
});
exports.getOrders = getOrders;
//Obtain order
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order = yield order_1.default.findByPk(id); //query only id (Primary key)
    //if order is not found return a msg error
    if (order) {
        res.json(order);
    }
    else {
        res.status(404).json({
            msg: `order with id ${id} not found`
        });
    }
    res.json(order);
});
exports.getOrder = getOrder;
//Create order
//status + amount + shipping_adress + user_id ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN ORDER TO ADD A NEW order
const postOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //Create order and insert body from the json request
        const order = order_1.default.build(body);
        yield order.save();
        res.json(order);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.postOrder = postOrder;
//Update order
const putOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const order = yield order_1.default.findByPk(id);
        if (!order) {
            return res.status(404).json({
                msg: `order with id ${id} doesn't exist`
            });
        }
        //Update and return order updated
        yield order.update(body);
        res.json(order);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.putOrder = putOrder;
//Delete order
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order = yield order_1.default.findByPk(id);
    if (!order) {
        return res.status(404).json({
            msg: `order with id ${id} doesn't exist`
        });
    }
    //Physical delete from database -> delete entire row from database
    yield order.destroy();
    res.json(order);
});
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=orders.js.map