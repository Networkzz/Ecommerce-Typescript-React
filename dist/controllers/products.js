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
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
/*Obtain multiple product
async function to query all products since method findall() return a promise so async function is needed*/
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.findAll(); //query all
    res.json({ products,
        msg: "working" });
});
exports.getProducts = getProducts;
//Obtain product
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id); //query only id (Primary key)
    //if product is not found return a msg error
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `product with id ${id} not found`
        });
    }
    res.json(product);
});
exports.getProduct = getProduct;
//Create product
//name + description + price + stock ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN product TO ADD A NEW product
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //Create product and insert body from the json request
        const product = product_1.default.build(body);
        yield product.save();
        res.json(product);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.postProduct = postProduct;
//Update product
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product = yield product_1.default.findByPk(id);
        if (!product) {
            return res.status(404).json({
                msg: `product with id ${id} doesn't exist`
            });
        }
        //Update and return product updated
        yield product.update(body);
        res.json(product);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.putProduct = putProduct;
//Delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id);
    if (!product) {
        return res.status(404).json({
            msg: `product with id ${id} doesn't exist`
        });
    }
    //Physical delete from database -> delete entire row from database
    yield product.destroy();
    res.json(product);
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map