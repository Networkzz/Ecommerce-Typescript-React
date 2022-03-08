"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Comment = connection_1.default.define('Comments', {
    content: {
        type: sequelize_1.DataTypes.STRING
    },
    product_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Comment;
//# sourceMappingURL=comment%20copy.js.map