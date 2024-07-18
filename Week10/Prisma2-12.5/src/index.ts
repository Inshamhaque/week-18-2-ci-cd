import { PrismaClient } from "@prisma/client";
import { title } from "process";
import { date } from "zod";
const prisma = new PrismaClient();

async function createUser(firtName:string, lastName:string,username:string,password:string){
    const response = await prisma.users.create({
        data:{
            firtName,
            lastName,
             username,
             password
        }
    });
    console.log(response);
}
// createUser("test","test","test","test");
async function addTodo(){
    const response = await prisma.todo.create({
        data : {
            Task : 'Learn DSA',
            Description : 'Learn DSA',
            user_id:1
        }
    });
    console.log(response);
}
// addTodo();
async function gettodouserdetails(){
    const response  = await prisma.users.findMany({
        where : {
            id : 1 
        },
        select : {
            id : true, 
            firtName : true,
            todos : true
        }
    });
    console.log(response.todos);
}
gettodouserdetails();