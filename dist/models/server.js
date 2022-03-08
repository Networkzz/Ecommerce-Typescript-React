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
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const order_1 = __importDefault(require("../routes/order"));
const order_detail_1 = __importDefault(require("../routes/order_detail"));
const product_1 = __importDefault(require("../routes/product"));
const comment_1 = __importDefault(require("../routes/comment"));
const supplier_1 = __importDefault(require("../routes/supplier"));
const product_supplier_1 = __importDefault(require("../routes/product_supplier"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
//Defining Server -> importing app from Express and creating a port as a String where port is 8000 in .env
class Server {
    constructor() {
        //Defining routes for each model
        this.apiPaths = {
            users: '/api/users',
            orders: '/api/orders',
            order_details: '/api/order_details',
            products: '/api/products',
            comments: '/api/comments',
            products_suppliers: '/api/product_suppliers',
            suppliers: '/api/suppliers'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000'; //If port is null, port 8000 by default
        //Inital methods
        this.dbConnection();
        //Defining middlewares
        this.middlewares();
        //Defining routes
        this.routes();
    }
    //Conection to database
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)({}));
        // reading body from json
        this.app.use(express_1.default.json());
        //public folder
        this.app.use(express_1.default.static('public'));
    }
    //implementing routes from apiPaths()
    routes() {
        this.app.use(this.apiPaths.users, user_1.default);
        this.app.use(this.apiPaths.orders, order_1.default);
        this.app.use(this.apiPaths.order_details, order_detail_1.default);
        this.app.use(this.apiPaths.products, product_1.default);
        this.app.use(this.apiPaths.comments, comment_1.default);
        this.app.use(this.apiPaths.suppliers, supplier_1.default);
        this.app.use(this.apiPaths.products_suppliers, product_supplier_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in the port: ${this.port}`); //Callback to check if server is running in the desired port
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map