import {Request,Response} from 'express'
import { User } from '../../models/user.model';
import * as bcrypt from 'bcryptjs'
// import { employeeSchema } from '../../validation/validation';
import {AuthenticationService} from './../../services/authentication.service'
export class SecurityController{

    // @validateRequest(userSchema)
    async login(request:Request,response:Response){
        const data:{email:string,password:string}=request.body

        try{
        const res:any=await User.findOne({email:data.email}).exec();
            if(!res){
                return     response.status(404).json({message:"user not found"});
            }

            const compare=bcrypt.compare(data.password,res.password);
            if(!compare){
           return response.status(404).json({message:"wrong credentials"});
        }
        
       const tokenDetails=await AuthenticationService.createToken(res);


        return   response.status(200).json({message:"logged in successfully",token:tokenDetails.token})
        }
        catch(err){ 
            console.log(err);
            return   response.status(500).json({error:err})
        }
    }
    

}