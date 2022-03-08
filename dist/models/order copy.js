"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Order = connection_1.default.define('Order', {
    status: {
        type: sequelize_1.DataTypes.STRING
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER
    },
    shipping_adress: {
        type: sequelize_1.DataTypes.STRING
    },
    user_id: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Order;
//# sourceMappingURL=order%20copy.js.map