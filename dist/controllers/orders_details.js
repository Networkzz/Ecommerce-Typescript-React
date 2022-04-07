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
exports.deleteOrder_detail = exports.putOrder_detail = exports.postOrder_detail = exports.getOrder_detail = exports.getOrder_details = void 0;
const order_detail_1 = __importDefault(require("../models/order_detail"));
/*Obtain multiple order_detail
async function to query all order_details since method findall() return a promise so async function is needed*/
const getOrder_details = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order_details = yield order_detail_1.default.findAll(); //query all
    res.json({ order_details,
        msg: "working" });
});
exports.getOrder_details = getOrder_details;
//Obtain order_detail
const getOrder_detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order_detail = yield order_detail_1.default.findByPk(id); //query only id (Primary key)
    //if order_detail is not found return a msg error
    if (order_detail) {
        res.json(order_detail);
    }
    else {
        res.status(404).json({
            msg: `order_detail with id ${id} not found`
        });
    }
    res.json(order_detail);
});
exports.getOrder_detail = getOrder_detail;
//Create order_detail
//price + quantity + order_id + product_id ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN order_detail TO ADD A NEW order_detail
const postOrder_detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //Create order_detail and insert body from the json request
        const order_detail = order_detail_1.default.build(body);
        yield order_detail.save();
        res.json(order_detail);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.postOrder_detail = postOrder_detail;
//Update order_detail
const putOrder_detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const order_detail = yield order_detail_1.default.findByPk(id);
        if (!order_detail) {
            return res.status(404).json({
                msg: `order_detail with id ${id} doesn't exist`
            });
        }
        //Update and return order_detail updated
        yield order_detail.update(body);
        res.json(order_detail);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.putOrder_detail = putOrder_detail;
//Delete order_detail
const deleteOrder_detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order_detail = yield order_detail_1.default.findByPk(id);
    if (!order_detail) {
        return res.status(404).json({
            msg: `order_detail with id ${id} doesn't exist`
        });
    }
    //Physical delete from database -> delete entire row from database
    yield order_detail.destroy();
    res.json(order_detail);
});
exports.deleteOrder_detail = deleteOrder_detail;
//# sourceMappingURL=orders_details.js.map