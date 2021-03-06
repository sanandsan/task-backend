import { Model } from "mongoose";

export interface IUser extends Document{
    name:string,
    email:string,
    updated?:string,
    role?:string,
    password:string,
    status?:string
}


export interface user{
    name:string,
    updated:string,
    email:string,

    role:string,
    password:string
    status:statusTypes
}


export enum statusTypes{
    online="ONLINE",
    offline="OFFLINE",
    deleted="DELETED",
    dnd="DONOTDISTURB"
}