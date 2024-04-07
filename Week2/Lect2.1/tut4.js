//approach 2 in fs.read() as async function
const fs = require('fs');
function promisedfn(){
    return new Promise((resolve)=>{
        fs.readFile("a.txt",(err,data)=>{
            resolve(data);
        })
    })
}
let a = promisedfn();
console.log(a);
a.then(()=>{
    console.log("file read and promise resolved");
    console.log(a);
})
console.log("before the promise is resolved");