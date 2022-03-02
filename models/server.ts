import express, { Application } from "express";
import userRouter from '../routes/user'
//Defining Server -> importing app from Express and creating a port as a String where port is 8000 in .env
class Server {

  private app: express.Application;
  private port: string;
  private apiPaths = {
    users: 'api/users'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000'; //If port is null, port 8000 by default

    //Defining routes
    this.routes();
  }

  routes(){
    this.app.use(this.apiPaths.users, userRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in the port: ${this.port}`) //Callback to check if server is running in the desired port
    })
  }
}

export default Server;