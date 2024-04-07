const express = require("express");
const app = express();
const port = process.env.port || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
let todos = [{
    id: 1,
    task: "Complete DSA"
},
{
    id :2,
    task: "Learn NodeJs"
}];

//Route for all TODO item 
app.get('/',(req,res)=>{res.json(todos);});

//Route to add new todo item 
app.post('/',(req,res) => {
    if (!req.body || !req.body.task) {
        return res.status(400).json({ error: 'Invalid request body' });
      }
    const { task }  = req.body;
    if(!task){
        return res.status(400).json({error:"no task given"});
    }
    const newTodo = {
        id: todos.length + 1,
        task
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
//Route to delete a TODO item by ID 
app.delete('/todos/:id', (req, res)=>{
    const id = parseInt(req.params.id, 10);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
  
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'TODO not found' });
    }
  
    todos.splice(todoIndex, 1);
  
    res.sendStatus(204);
});
  
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })