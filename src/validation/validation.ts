
import {Request,Response,NextFunction} from 'express'
import  * as Joi from 'joi'

export const validateRequest = (schema:any) => async (req:Request, res:Response, next:NextFunction) => {
    const { error }:any =Joi.valid(req.body, schema);

    if (error) {  
      throw new Error(error);
    }

    return next();
  };


// export  const employeeSchema =Joi.object().keys({
//     name:  Joi.string().required(),
//     email: Joi.string().required(),
//     phone_number: Joi.string().required(),
//    profile_image:Joi.string().optional()
//   })


export  const employeeSchema = {
    
    body: {
        name: Joi.number().required(),
        email: Joi.string().required(),
            phone_number: Joi.string().required(),
           profile_image:Joi.string().optional()
    }
}
