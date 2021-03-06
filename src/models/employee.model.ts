import {employeeSchema} from '../schema/employee.schema';
import mongoose from 'mongoose';
import { IUser } from '../interface/user-interface';
export const Employee= mongoose.model("employee",employeeSchema);
