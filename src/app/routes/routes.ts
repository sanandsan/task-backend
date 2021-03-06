
import * as express from 'express'
import { employeeSchema } from '../../validation/validation';
import { EmployeeController } from '../controller/employee.controller';
import { SecurityController } from '../controller/security.controller';
import { UserController } from '../controller/user.controller';
// import {ServiceController} from './../controller/service.controller'
import { HealthController } from './../controller/health.controller';
const expressJoi = require('express-joi-validator');
export class MainRoute{
    employeeController :EmployeeController= new EmployeeController();
    userController :UserController= new UserController();
    securityController :SecurityController= new SecurityController();

    public  intializeRoute(app:express.Application){

app.get('/api/v1/health',HealthController.getHealth)


//employee Opertions
app.route('/api/v1/employee').post(this.employeeController.addEmployee);
app.route('/api/v1/employee/:_id').get(this.employeeController.getEmployee);
app.route('/api/v1/employee/:_id').put(this.employeeController.updateEmployee);
app.route('/api/v1/employee/:_id').delete(this.employeeController.deleteEmployee);
app.route('/api/v1/employee/:offset/:limit').get(this.employeeController.getAllEmployee);



//user operations

app.route('/api/v1/register').post(this.userController.adduser);
app.route('/api/v1/login').post(this.securityController.login);

}
}
