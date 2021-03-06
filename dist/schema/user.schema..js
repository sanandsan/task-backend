"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
var mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    updated: { type: Date, default: Date.now },
    status: { type: String, optional: true }
});
