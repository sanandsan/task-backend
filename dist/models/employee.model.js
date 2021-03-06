"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var employee_schema_1 = require("../schema/employee.schema");
var mongoose_1 = __importDefault(require("mongoose"));
exports.Employee = mongoose_1.default.model("employee", employee_schema_1.employeeSchema);
