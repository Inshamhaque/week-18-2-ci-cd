//asyncfn()
//some sync task
//want my work which async return 
//someother sync task 
function asyncfn(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("async work done");
        },1000);
    })
}
function synctask(){
    console.log("this is a sync task");
}
const a = asyncfn();
a.then(()=>{
    console.log(a);
    synctask();
})