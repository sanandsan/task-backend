import { IUserResponse } from "../schema/user.schema.";

import  jwt from 'jsonwebtoken'
export class AuthenticationService{
    public static async createToken(user: IUserResponse) {
        const secret = process.env.JWT_SECRET?process.env.JWT_SECRET:"testapp";
        const expiresIn = parseInt(process.env.JWT_EXPIRY_IN_SECONDS?process.env.JWT_EXPIRY_IN_SECONDS:"60000")
        const refresh_token_expiresIn =  parseInt(process.env.RT_EXPIRY_IN_SECONDS?process.env.RT_EXPIRY_IN_SECONDS:"100000")

        const refreshTokenSecret = process.env.JWT_SECRET?process.env.JWT_SECRET:"testapp";
        const dataStoredInToken = {
          _id: user._id,
        };
        const token = jwt.sign(dataStoredInToken, secret,{expiresIn} );
        const refreshToken = jwt.sign({ _id: user._id }, refreshTokenSecret, {
          expiresIn: refresh_token_expiresIn,
        });
        return {
          token,
          refreshToken,
          refreshTokenExpireIn: refresh_token_expiresIn,
        };
      }
}