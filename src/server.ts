
import express from 'express';
import http from 'http';
import { App } from './app';
import * as dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 3000;

const appInstance: App = new App();
appInstance.setupRoutes();
const app: express.Application = appInstance.app;

const server = http.createServer(app);


    server.listen(PORT, () => {
      console.log("server listening on port:" + PORT);
    });
