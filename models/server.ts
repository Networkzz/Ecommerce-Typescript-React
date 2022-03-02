import express, { Application } from "express";
import userRoutes from '../routes/user'
import cors from "cors";
//Defining Server -> importing app from Express and creating a port as a String where port is 8000 in .env
class Server {

  private app: express.Application;
  private port: string;
  private apiPaths = {
    users: '/api/users'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000'; //If port is null, port 8000 by default
    //Inital methods
    //Defining middlewares
    this.middlewares();
    //Defining routes
    this.routes();
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
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in the port: ${this.port}`) //Callback to check if server is running in the desired port
    })
  }
}

export default Server;