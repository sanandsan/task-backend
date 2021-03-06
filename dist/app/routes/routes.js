"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRoute = void 0;
var employee_controller_1 = require("../controller/employee.controller");
var security_controller_1 = require("../controller/security.controller");
var user_controller_1 = require("../controller/user.controller");
// import {ServiceController} from './../controller/service.controller'
var health_controller_1 = require("./../controller/health.controller");
var expressJoi = require('express-joi-validator');
var MainRoute = /** @class */ (function () {
    function MainRoute() {
        this.employeeController = new employee_controller_1.EmployeeController();
        this.userController = new user_controller_1.UserController();
        this.securityController = new security_controller_1.SecurityController();
    }
    MainRoute.prototype.intializeRoute = function (app) {
        app.get('/api/v1/health', health_controller_1.HealthController.getHealth);
        //employee Opertions
        app.route('/api/v1/employee').post(this.employeeController.addEmployee);
        app.route('/api/v1/employee/:_id').get(this.employeeController.getEmployee);
        app.route('/api/v1/employee/:_id').put(this.employeeController.updateEmployee);
        app.route('/api/v1/employee/:_id').delete(this.employeeController.deleteEmployee);
        app.route('/api/v1/employee/:offset/:limit').get(this.employeeController.getAllEmployee);
        //user operations
        app.route('/api/v1/register').post(this.userController.adduser);
        app.route('/api/v1/login').post(this.securityController.login);
    };
    return MainRoute;
}());
exports.MainRoute = MainRoute;
