"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Product_supplier = connection_1.default.define('Products_has_suppliers', {
    product_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    supplier_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Product_supplier;
//# sourceMappingURL=product_supplier.js.map