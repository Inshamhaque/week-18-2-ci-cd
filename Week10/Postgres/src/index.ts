import {Client} from 'pg';

const client  = new Client({
    connectionString: "postgresql://haqueinsham:rfepI5q0cToR@ep-little-tooth-80855975.us-east-2.aws.neon.tech/Postgres?sslmode=require"
});

async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result);
}
// createUsersTable();
//INSERTION
async function insertIntoTable(username : string, email : string, password : string){
    try{
        await client.connect();
        const query = {
            text : 'INSERT INTO users(username,email,password) VALUES($1,$2,$3)',
            values : [username,email, password]
        };
        const result = await client.query(query);
        console.log(result);
    }
    catch(err){
        console.log("Error during the insertion:   ",err);
    }
    finally{
        await client.end();
    }
}
//insertIntoTable("Rahul Gandhi","Rahulbaba@gmail.com","6996");
//RETREIVING 
async function getUser(email:string){
    try{
        await client.connect();
        const query = {
            text : 'SELECT * FROM users WHERE email = $1',
            values:[email]
        }
        const result = await client.query(query);
        if(result.rows.length>0){
            console.log("Information retreived : ",result.rows[0]);
        }
        else{
            console.log("Information unavailable");
        }
    }
    catch(err){
        console.log("Error during the retreival:   ",err);
    }
    finally{
        await client.end();
    }
}
getUser("haqueinsham@gmail.com");