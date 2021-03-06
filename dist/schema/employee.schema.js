"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeSchema = void 0;
var mongoose_1 = require("mongoose");
var mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
exports.employeeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    profile_image: { type: String, required: false },
    updated: { type: Date, default: Date.now },
    status: { type: String, optional: true }
});
exports.employeeSchema.plugin(mongoose_paginate_v2_1.default);
