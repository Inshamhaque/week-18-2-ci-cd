"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://haqueinsham:rfepI5q0cToR@ep-little-tooth-80855975.us-east-2.aws.neon.tech/Postgres?sslmode=require"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
// createUsersTable();
//INSERTION
function insertIntoTable(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = {
                text: 'INSERT INTO users(username,email,password) VALUES($1,$2,$3)',
                values: [username, email, password]
            };
            const result = yield client.query(query);
            console.log(result);
        }
        catch (err) {
            console.log("Error during the insertion:   ", err);
        }
        finally {
            yield client.end();
        }
    });
}
//insertIntoTable("Rahul Gandhi","Rahulbaba@gmail.com","6996");
//RETREIVING 
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = {
                text: 'SELECT * FROM users WHERE email = $1',
                values: [email]
            };
            const result = yield client.query(query);
            if (result.rows.length > 0) {
                console.log("Information retreived : ", result.rows[0]);
            }
            else {
                console.log("Information unavailable");
            }
        }
        catch (err) {
            console.log("Error during the retreival:   ", err);
        }
        finally {
            yield client.end();
        }
    });
}
getUser("haqueinsham@gmail.com");
