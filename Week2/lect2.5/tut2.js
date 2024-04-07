//Get -> user can check how many kidneys they have 
//Post -> user can add new kidney 
//Put -> user can replace a kindney, making it healthy
//Delete-> user can remove a kidney
const express  = require('express');
const app = express();
const port = 3000;
const users  = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];
//Get method 
app.get("/",(req,res)=>{
    const johnKidney = users[0].kidneys;
    const numberofkidneys = users[0].kidneys.length;
    let healthyKidneys = 0;
    for(let i=0;i<johnKidney.length;i++){
        if(johnKidney[i].healthy==1){
            healthyKidneys++;
        }
    }
    res.json(users);
})
//user adding kidney 
app.post('/',(req,res)=>{
    let name = req.query.name;
    for(let i=0;i<users.length;i++){
        if(name === users[i].name){
            if(users[i].kidneys.length===2){
                res.send("2 kidneys are already there");
            }
            else if(users[i].kidneys.length==1){
                users[i].kidneys.push({healthy:true});
                res.send("Kindney implantation successful, Now he has" + users[i].kidneys.length + "kidneys");
                return;
            }
        }
    }
    let nok = req.query.nok;
    let healthy = req.query.healthy;
    let user = 
    {
        name,
        kidneys:[]  
    };
    for(let i=0;i<nok;i++){
        if(healthy == 2){
            user.kidneys[i] = {healthy:true};
        }
        else if(healthy == 1){
            user.kidneys[i] = {healthy:true};
            if(nok == 2)
            {
                user.kidneys[i+1] = {healthy:false};
                i++;
            }
        }
        else{
            user.kidneys[i] = {healthy:false};
        }
    }
    users.push(user);
    res.send({
        message:"User added",
        data:user
    });
})
//changing the kidney status
// changing the kidney status
app.put("/", (req, res) => {
    let name = req.query.name;
    for(let i=0;i<users.length;i++){
        if(users[i].name==name){
            for(let j=0;j<users[i].kidneys.length;j++){
                users[i].kidneys[j].healthy=true;
            }
        }        
    };
    res.json(users);
});
app.delete("/",(req,res)=>{
    //to remove the unhealthy kidney from the patient directory
    let unhealthy = 0;
    for(let i=0;i<users.length;i++){
        let kds = users[i].kidneys;
        for(let j=0;j<kds.length;j++){
            if(!kds[j].healthy){
                unhealthy++;
            }
        }
    }
    if(unhealthy == 0){
        res.status(411).send("Incorrect response");
        return;
    }
    let name = req.query.name;
    for(let i=0;i<users.length;i++){
        if(users[i].name===name){
            for(let j=0;j<users[i].kidneys.length;j++){
                if(users[i].kidneys[j].healthy==false){
                    users[i].kidneys.splice(j,1);
                }
            }
        }
    }
    res.json(users);
})
app.listen(port);

