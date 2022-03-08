"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsers); //Get multiple users
router.get('/:id', users_1.getUser); //Get user from id 
router.post('/', users_1.postUser); //Create user
router.put('/:id', users_1.putUser); //Update user
router.delete('/', users_1.deleteUser); //Delete user
exports.default = router;
//# sourceMappingURL=user%20copy.js.map