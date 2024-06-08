//Type inference in zod -> 
import {z} from 'zod';

const zod_schema = z.object({
    name : z.string(),
    age : z.number().min(18).optional(),
    email : z.string()
})
type finaluser_schema = z.infer<typeof zod_schema>;
const obj : finaluser_schema = {
    name : "insham",
    email : "haqueinsham@gmail.com"
}
console.log(obj);