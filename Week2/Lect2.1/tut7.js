var p1 = new Promise((resolve)=>{
    resolve("1st done");
})
var p2 = new Promise((resolve)=>{
    resolve("2nd done");
})
var p3 = new Promise((resolve)=>{
    resolve("3rd done");
})
const x = getPromises();
Promise.all();
