"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var user_schema_1 = require("../schema/user.schema.");
var mongoose_1 = __importDefault(require("mongoose"));
// import { IUser } from '../interface/user-interface';
exports.User = mongoose_1.default.model("user", user_schema_1.userSchema);
