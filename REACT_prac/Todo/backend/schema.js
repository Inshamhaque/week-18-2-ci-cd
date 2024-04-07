//creating zod schema for validation
const zod = require('zod');
//for post 
const schema_post = zod.object({
    title: zod.string(),
    description : zod.string().max(99)
})
const schema_put = zod.object({
    id : zod.string()
})
module.exports = {
    schema_post,
    schema_put
}