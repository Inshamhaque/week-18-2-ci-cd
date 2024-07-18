"use server"
import client from '@/db'
async function solve(email:string,password:string ){
    try{
        const user = await client.user.create({
            data:{
                email,
                password,
            }
        })
        return "User created!!!"
    }
    catch(e){
        return "user not created"
    }
}
export default solve;