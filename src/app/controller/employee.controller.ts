import {Request,Response} from 'express'
import { Employee } from '../../models/employee.model';

// import { employeeSchema, validateRequest } from '../../validation/validation';

export class EmployeeController{

    
    async addEmployee(request:Request,response:Response){
        
        try{
        console.log(request.body);
        const employee= new Employee(request.body);
        const res=await employee.save();
        response.status(200).json({message:res})
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }
    
    async getEmployee(request:Request,response:Response){
        
        try{
        console.log(request.params._id);
       const employee=await Employee.findById(request.params._id);
        response.status(200).json(employee)
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }

    async getAllEmployee(request:Request,response:Response){
        console.log(request.params.offset)
        const offset= parseInt(request.params.offset?request.params.offset:"1") ;
        const limit= parseInt(request.params.limit?request.params.limit:"1")
        const page=offset*limit;
        console.log(limit)
        // const sort=request.params.sort ?request.params.sort:
        try{
        
       const employee=await Employee.paginate({},{offset:page,limit:limit});
        response.status(200).json(employee)
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }

    async updateEmployee(request:Request,response:Response){
        
        try{
        console.log(request.params._id);
       const employee=await Employee.findByIdAndUpdate(request.params._id,request.body,{new:true}).lean().exec();
        response.status(200).json({message:"updated succesfully",employee})
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }
    async deleteEmployee(request:Request,response:Response){
        
        try{
        console.log(request.params._id);
       const employee=await Employee.findByIdAndDelete(request.params._id).exec();
        response.status(200).json({message:"employee Deteled successfully"})
        }
        catch(err){ 
            console.log(err);
            response.status(500).json({error:err})
        }
    }

}