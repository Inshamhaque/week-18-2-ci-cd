//first,second, third .... using promsies 
function promisefn(duration){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("I am done!!!");
        },1000)
    })
}
const a = promisefn(10000);
a.then(()=>{
    console.log("first done");
    promisefn(1000).then(()=>{
        console.log("Second is also done");
        promisefn(3000).then(()=>{
            console.log("All are done");
        })
    })
})
//but this is just like a callback hell 
//promise chaining is the solution
