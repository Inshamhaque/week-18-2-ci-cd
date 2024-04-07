const fs  = require('fs');

//this acts as a ketchup which is 
function read(print){
    fs.readFile("a.txt","utf-8",function(err,data){
        print(data);
    })
}
//acts as  a callback when timmy gets the ketchup and returns it to you!!!
function print(data){
    console.log(data);
}
read(print);
