

import {Request,Response, response} from 'express'
export class HealthController{
     public static getHealth(req:Request,res:Response){
         try{
             res.status(200).json({message:"Status Up"})
         }
         catch(err){
             res.status(500).json({error:err})
         }
     }
}