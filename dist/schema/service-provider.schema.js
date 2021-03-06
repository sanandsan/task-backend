"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceProviderSchema = void 0;
var mongoose_1 = require("mongoose");
// const pointSchema = new mongoose.Schema({
// type: {
//  type: String,
//  enum: ['Point'],
//  required: true
// },
// coordinates: {
//  type: [Number],
//  required: true
// }
// });
// export const serviceProviderSchema= new Schema(
//     {
//      providerName: {type:String},
//      serviceType:{type:String},
//      phoneNumber: {type:Number},  
//      location: {
//         type: pointSchema,
//         required: true
// ,index: '2dsphere'     }
//     }
//    )
exports.serviceProviderSchema = new mongoose_1.Schema({
    providerName: { type: String },
    serviceType: { type: String },
    phoneNumber: { type: Number }, email: { type: String },
    location: {
        type: { type: String },
        coordinates: [],
    }
});
exports.serviceProviderSchema.index({ location: "2dsphere" });
