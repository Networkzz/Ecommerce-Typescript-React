"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Product = connection_1.default.define('Products', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    image: {
        type: sequelize_1.DataTypes.BLOB
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Product;
//# sourceMappingURL=product.js.map