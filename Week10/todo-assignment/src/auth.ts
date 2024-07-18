import JWT_SECRET from "./config";
import express from 'express'
import jwt from 'jsonwebtoken'
import { Prisma } from "@prisma/client";

const authMiddleware = (req:any,res:any,next:any)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader ){
        return res.status(411).json({
            msg : "No input token recieved"
        })
    }
    const token = authHeader; 
    const decoded = jwt.verify(token,JWT_SECRET);
    if(!decoded){
        return res.status(403).json({
            msg : "Invalid inputs"
        })
    }
    req.user = decoded;
    
    next();

}
export default authMiddleware;