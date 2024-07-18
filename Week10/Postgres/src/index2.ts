import { Client } from "pg";

const client = new Client({
    connectionString : 'postgresql://haqueinsham:rfepI5q0cToR@ep-little-tooth-80855975.us-east-2.aws.neon.tech/Postgres?sslmode=require'
});

//SQL injection
//PARAMETRIZED 
async function insert1(email:string,firstName:string){
    const text = 'INSERT INTO users(email,firstName) VALUES($1,$2)';
    const values = [email,firstName]
    const res = await client.query(text,values);
    console.log(res);
}
//TEXT ONLY
async function insert2(email:string,firstName:string){
    const res = await client.query(`
        INSERT INTO users(email,firstName)
        VALUES($1,$2)`
        ,[email,firstName])
    console.log(res);
}
//OBJECT FORM 
async function insert3(email:string,firstName:string){
    const query = {
        text : 'INSERT INTO users(email,firstName) VALUES($1,$2)',
        values : [email,firstName]
    }
    const res = await client.query(query);
    console.log(res);
}
insert1('; DELETE * FROM user',"insham");

