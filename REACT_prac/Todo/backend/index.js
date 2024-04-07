const { schema_post, schema_put } = require("./schema.js");
const { todo } = require("./db.js");
const express = require('express');
const cors  = require('cors')
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
//to add  a todo 
app.post('/todo', async (req, res) => {
    const createpayload = req.body; // Correct access to req.body
    const parsepayload = schema_post.safeParse(createpayload);
    if (!parsepayload.success) {
        return res.status(411).json({//Ensure to return here
            msg: "Incorrect inputs"
        });
    }
    await todo.create({
        title: createpayload.title,
        description: createpayload.description
    });
    res.json({ msg: "Todo created" });
});
//to get all todos
app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({ todos });
});
//to update any todo 
app.put('/completed', async (req, res) => {
    const createpayload = req.body; 
    const parsepayload = schema_put.safeParse(createpayload);
    if (!parsepayload.success) {
        return res.json({
            msg: "Incorrect inputs"
        });
    }
    await todo.updateOne({ _id : req.body.id }, { $set: { completed: true } });
    res.json({ msg: "Todo marked as complete" });
});
//for just listening on the server
app.listen(port, () => {
    console.log(`port running at ${port}`);
});
