"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Type inference in zod -> 
const zod_1 = require("zod");
const zod_schema = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number().min(18).optional(),
    email: zod_1.z.string()
});
const obj = {
    name: "insham",
    email: "haqueinsham@gmail.com"
};
console.log(obj);
