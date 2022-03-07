import express, { Application } from "express";
import userRoutes from '../routes/user'
import orderRoutes from '../routes/order'
import order_detailRoutes from "../routes/order_detail";
import productRoutes from "../routes/product";
import commentRoutes from "../routes/comment";
import supplierRoutes from "../routes/supplier";
import product_supplierRoutes from "../routes/product_supplier";
import cors from "cors";
import db from "../db/connection";
//Defining Server -> importing app from Express and creating a port as a String where port is 8000 in .env
class Server {

  private app: express.Application;
  private port: string;
  private apiPaths = {
    users: '/api/users',
    orders: '/api/orders',
    order_details: '/api/order_details',
    products: 'api/products',
    comments: 'api/comments',
    products_suppliers: 'api/product_suppliers',
    suppliers: 'api/suppliers'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000'; //If port is null, port 8000 by default
    //Inital methods
    this.dbConnection();
    //Defining middlewares
    this.middlewares();
    //Defining routes
    this.routes();
  }
//Conection to database
  async dbConnection() {
    try {
      
        await db.authenticate();
        console.log('Database online')

    } catch (error) {
        console.log(error);
    }
  }

  middlewares(){

    //CORS
    this.app.use( cors({
      
    }));
    // Lectura del body
    this.app.use(express.json());
    //Carpeta publica
    this.app.use(express.static('public'));
  }

  routes(){
    this.app.use(this.apiPaths.users, userRoutes);
    this.app.use(this.apiPaths.orders, orderRoutes);
    this.app.use(this.apiPaths.order_details, order_detailRoutes);
    this.app.use(this.apiPaths.products, productRoutes);
    this.app.use(this.apiPaths.comments, commentRoutes);
    this.app.use(this.apiPaths.suppliers, supplierRoutes);
    this.app.use(this.apiPaths.products_suppliers, product_supplierRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in the port: ${this.port}`) //Callback to check if server is running in the desired port
    })
  }
}

export default Server;