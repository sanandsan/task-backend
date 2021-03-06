
import * as bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'
import express, { NextFunction } from 'express';
import { MainRoute } from './app/routes/routes';
import * as dotenv from 'dotenv';
dotenv.config()

const url= process.env.MONGOURL || "mongodb://localhost:27017/servicesystem"
console.log(url)
export class App {
  public app!: express.Application;
  private storageRoutes: MainRoute | undefined;
  constructor() {
    try {
      console.log('info', 'Initializing Application');
     console.log('time  ' + +new Date());
      this.app = express();
      this.initializeMiddleware();
      this.setupRoutes();
      this.mongoSetup();
    } catch (err) {
      console.log(err)
    }
  }
  private initializeMiddleware(): void {
   
    this.app.use(cors()); // Use CORS
    this.app.use(bodyParser.json({ limit: '50mb' }));
   
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(function (err:any, req:any, res:any, next:NextFunction) {
      if (err.isBoom) {
           return res.status(err.output.statusCode).json(err.output.payload);
      }
  });
  }
  public setupRoutes() {
    this.storageRoutes = new MainRoute();
    this.storageRoutes.intializeRoute(this.app);
  }
  public mongoSetup(){
        mongoose.connect(url,{useNewUrlParser:true}).then(res=>{
          console.log("connection successful url:"+url)
        }).catch(err=>{
          console.log(err)
        })
  }
}
