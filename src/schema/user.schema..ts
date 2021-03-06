import { string } from '@hapi/joi'
import { Model, Schema} from 'mongoose';
import {Document} from 'mongoose'

export const userSchema= new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
   
    updated: { type: Date, default: Date.now },
    status:{type:String,optional:true}
})

export interface IUser{
name:string
email:string
password:string
status:string
}


export interface IUserResponse extends Document{
    
    name:string
    email:string
    password:string
    status:string
    }