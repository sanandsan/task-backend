import { string } from '@hapi/joi'
import { Schema} from 'mongoose';
import MongoosePaginate from 'mongoose-paginate-v2';


export const employeeSchema= new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone_number:{type:String,required:true},
    profile_image:{type:String,required:false},
    updated: { type: Date, default: Date.now },
    status:{type:String,optional:true}
})

employeeSchema.plugin(MongoosePaginate)