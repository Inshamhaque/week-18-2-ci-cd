import { NextRequest } from "next/server";
import client from '@/db'

export function GET(){
    return Response.json({
        email:"haqueinsham@gmail.com",
        name:"Insham"
    })
}
export async function POST(req : NextRequest){
    const body = await req.json();
    console.log(body);
    await client.user.create({
        data:{
            email:body.username,
            password:body.password
        }
    })
    return Response.json({
        message : "You are signed up!!!"
    })
}