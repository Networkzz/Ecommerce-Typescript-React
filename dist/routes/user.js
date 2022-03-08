"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router_user = (0, express_1.Router)();
router_user.get('/', users_1.getUsers); //Get multiple users
router_user.get('/:id', users_1.getUser); //Get user from id 
router_user.post('/', users_1.postUser); //Create user
router_user.put('/:id', users_1.putUser); //Update user
router_user.delete('/:id', users_1.deleteUser); //Delete user
exports.default = router_user;
//# sourceMappingURL=user.js.map