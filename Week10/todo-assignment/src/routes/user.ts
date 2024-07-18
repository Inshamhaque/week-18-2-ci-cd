import exp from 'constants';
import express from 'express';
const userRouter = express.Router();
import jwt from 'jsonwebtoken';
import JWT_SECRET from '../config'
import {z} from 'zod';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import authMiddleware from '../auth';
//sign-up schema 
const signUpSchema = z.object({
    name :  z.string(),
    email : z.string().email(),
    password : z.string(),
})
//sign-up Route 
userRouter.post('/signup',async (req,res)=>{
    const body = req.body;
    //safeparsing 
    const result = signUpSchema.safeParse(body);
    let user_id;
    if(result.success){
        const email = body.email;
        //CHECKING IF THE USER WITH SAME MAIL EXISTS OR NOT 
        const response = await prisma.user.findFirst({
            where : {
                email
            }
        })
        //CREATING THE USER IF NON-DUPLICATE CREDENTIALS 
        if(response===null){
            const response = await prisma.user.create({
                data : {
                    name : body.name,
                    email,
                    password : body.password
                }
            })
            user_id = response.id;
        }        
        //THROWING ERROR IF DUPLICATE CREDENTIALS EXIST
        else{
            return res.status(404).json({
                msg: "User already exists"
            })
        }
        
    }
    //INVALID CREDENTIALS TYPE 
    else{
        return res.status(411).json({
            msg: "Bad credentials type"
        })
    }
    //creating jwt 
    const payload = {
        user_id : user_id,
        email : body.email
    }
    const token = jwt.sign(payload,JWT_SECRET);
    //respinding
    return res.json({
        msg : "User created successfully",
        token,
        email: body.email
        
    })
});
//Implement to change the DB to change the email 
userRouter.put('/updatePassword',authMiddleware,async(req,res)=>{
    const new_password = req.body.new_password;
    const email = req.body.email;
    const user = await prisma.user.findUnique({
        where : {
            email
        }
    })
    const user_id = user?.id; 
    const updateUser = await prisma.user.update({
        where : {
            id: user_id
        },
        data :{
            password : new_password
        }
    })
    return res.json({
        msg : "Password updated successfully"
    })
    return res.status(413).json({
        msg : "Password update failed, Try again after sometime"
    })
})
export default userRouter;