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
exports.deleteProduct_supplier = exports.putProduct_supplier = exports.postProduct_supplier = exports.getProduct_supplier = exports.getProduct_suppliers = void 0;
const product_supplier_1 = __importDefault(require("../models/product_supplier"));
/*Obtain multiple product_supplier
async function to query all product_suppliers since method findall() return a promise so async function is needed*/
const getProduct_suppliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product_suppliers = yield product_supplier_1.default.findAll(); //query all
    res.json({ product_suppliers,
        msg: "working" });
});
exports.getProduct_suppliers = getProduct_suppliers;
//Obtain product_supplier
const getProduct_supplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product_supplier = yield product_supplier_1.default.findByPk(id); //query only id (Primary key)
    //if product_supplier is not found return a msg error
    if (product_supplier) {
        res.json(product_supplier);
    }
    else {
        res.status(404).json({
            msg: `product_supplier with id ${id} not found`
        });
    }
    res.json(product_supplier);
});
exports.getProduct_supplier = getProduct_supplier;
//Create product_supplier
//suppliers_id + product_id ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN product_supplier TO ADD A NEW product_supplier
const postProduct_supplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //Create product_supplier and insert body from the json request
        const product_supplier = product_supplier_1.default.build(body);
        yield product_supplier.save();
        res.json(product_supplier);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.postProduct_supplier = postProduct_supplier;
//Update product_supplier
const putProduct_supplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product_supplier = yield product_supplier_1.default.findByPk(id);
        if (!product_supplier) {
            return res.status(404).json({
                msg: `product_supplier with id ${id} doesn't exist`
            });
        }
        //Update and return product_supplier updated
        yield product_supplier.update(body);
        res.json(product_supplier);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.putProduct_supplier = putProduct_supplier;
//Delete product_supplier
const deleteProduct_supplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product_supplier = yield product_supplier_1.default.findByPk(id);
    if (!product_supplier) {
        return res.status(404).json({
            msg: `product_supplier with id ${id} doesn't exist`
        });
    }
    //Physical delete from database -> delete entire row from database
    yield product_supplier.destroy();
    res.json(product_supplier);
});
exports.deleteProduct_supplier = deleteProduct_supplier;
//# sourceMappingURL=products_suppliers.js.map