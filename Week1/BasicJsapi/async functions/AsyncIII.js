//other async functions that is available in js 
const fs  =  require('fs');
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});
console.log("hello world");
//busy waiting
function busy(){
    let sum = 0; 
    for(let i=0;i<1000000000;i++){
        sum++;
    }
}
console.log("hello world2");


