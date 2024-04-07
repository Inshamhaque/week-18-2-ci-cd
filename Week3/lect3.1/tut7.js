//creating a zod schema like for the following data
const zod = require('zod');
function validateInput(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password: zod.string().min(8),
        country: zod.literal("IN")
    });
    const response = schema.safeParse(obj);
    if(!response.success){
        console.log({
            "status":"sorry, something wrong with your input"
        });
    }
    else{
        console.log(response);
    }
}
validateInput({
    email:"inshamhaque@gmail.com",
    password: "123456778",
    country: "I"
})