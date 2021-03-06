import {userSchema} from '../schema/user.schema.';
import mongoose from 'mongoose';
// import { IUser } from '../interface/user-interface';
export const User= mongoose.model("user",userSchema);
