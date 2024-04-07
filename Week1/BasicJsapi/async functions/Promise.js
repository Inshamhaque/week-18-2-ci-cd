//Overview of the Promise function <;>
const fs = require('fs');
function read(){
    console.log("Before promise");
    return new Promise(function(resolve){//promise((resolve function),(error function))
        console.log("inside promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);
        });
    })
}
function onDone(data){
    console.log(data);
    console.log("Work done sir!!!");
}
read().then(onDone);