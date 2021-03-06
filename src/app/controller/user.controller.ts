import {Request,Response} from 'express'
import { User } from '../../models/user.model';
import { IUser } from '../../schema/user.schema.';
import * as bcrypt from 'bcryptjs'
// import { employeeSchema } from '../../validation/validation';

export class UserController{

    // @validateRequest(userSchema)
    async adduser(request:Request,response:Response){
        const userBody:IUser=request.body;
const email= userBody.email.toLocaleLowerCase();
        try{
        const userExist=User.findOne({email:email}).exec();
            
        // if(userExist){
        //     response.status(400).json({message:"user already exist"})
        // }
        // else{
            const hashedPassword=await bcrypt.hash(userBody.password, 10);
            const saveData={
                email:userBody.email,
                password:hashedPassword,
                name:userBody.name
            }
        const user= new User(saveData);
        const res=await user.save();
        response.status(200).json({message:"user registered succesfuly"})
        // }
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }
    

}