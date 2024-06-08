import { PrismaClient } from "@prisma/client";
const prisma  = new PrismaClient();
//this is the auotgenerated client which prisma has done for us. 

//Insert the user
async function insertUser(email:string,password:string,firstname?:string, lastname?:string){
    const res = await prisma.user.create({
        data : {
            email : email,
            password : password,
            firstName : firstname,
            lastName : lastname
        },
        select:{
            id:true,
            password:true
        }
    });
    console.log(res);
} 
//nsertUser("haqueinsham1","1234","Insham","Haque");

//Update Command 
//to check that input params are correct or not
interface updateparams {
    firstname : string;
    lastname : string;

}
//passing two params. . . 
async function update(id : number, {
    firstname,
    lastname
}:updateparams){
    const post  = await prisma.user.update({
        where : {id:id},
        data:{
            firstName:firstname,
            lastName:lastname
        },
        select:{
            id:true,
            firstName:true
        }
    });
    console.log(post);
}
// update(3,{
//     firstname: "Syed Insham",
//     lastname: "haque"
// });

//Delete Command 
async function getUser(username:string){
    const res = await prisma.user.findMany({
        where : {
            email: username
        }
    });
    console.log(res);
}
getUser("haqueinsham@gmail.com");