"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//Defining connection to databse { db.name, user, password, host type and dialect}
const db = new sequelize_1.Sequelize('ecommerce', 'root', 'Locker123', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,  each command that impact to the database is shown in the console
});
exports.default = db;
//# sourceMappingURL=connection.js.map