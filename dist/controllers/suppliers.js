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
exports.deleteSupplier = exports.putSupplier = exports.postSupplier = exports.getSupplier = exports.getSuppliers = void 0;
const supplier_1 = __importDefault(require("../models/supplier"));
/*Obtain multiple supplier
async function to query all suppliers since method findall() return a promise so async function is needed*/
const getSuppliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const suppliers = yield supplier_1.default.findAll(); //query all
    res.json({ suppliers,
        msg: "working" });
});
exports.getSuppliers = getSuppliers;
//Obtain supplier
const getSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const supplier = yield supplier_1.default.findByPk(id); //query only id (Primary key)
    //if supplier is not found return a msg error
    if (supplier) {
        res.json(supplier);
    }
    else {
        res.status(404).json({
            msg: `supplier with id ${id} not found`
        });
    }
    res.json(supplier);
});
exports.getSupplier = getSupplier;
//Create supplier
//full_name + email + password + country ARE NOT NULL SO YOU NEED TO SEND THAT IN POSTMAN IN supplier TO ADD A NEW supplier
const postSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //Create supplier and insert body from the json request
        const supplier = supplier_1.default.build(body);
        yield supplier.save();
        res.json(supplier);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.postSupplier = postSupplier;
//Update supplier
const putSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const supplier = yield supplier_1.default.findByPk(id);
        if (!supplier) {
            return res.status(404).json({
                msg: `supplier with id ${id} doesn't exist`
            });
        }
        //Update and return supplier updated
        yield supplier.update(body);
        res.json(supplier);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
});
exports.putSupplier = putSupplier;
//Delete supplier
const deleteSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const supplier = yield supplier_1.default.findByPk(id);
    if (!supplier) {
        return res.status(404).json({
            msg: `supplier with id ${id} doesn't exist`
        });
    }
    //Physical delete from database -> delete entire row from database
    yield supplier.destroy();
    res.json(supplier);
});
exports.deleteSupplier = deleteSupplier;
//# sourceMappingURL=suppliers.js.map