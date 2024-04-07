//Set_timeout as an async function <-:->
function sum(n){
    let sum = 0;
    for(let i=0;i<n;i++){
        sum+=i;
    }
    console.log("sum is "+sum);
    return sum;
}
function sumtill100(){
    return sum(100);
}
setTimeout(sumtill100,1000);// this here acts as a async function since js can run the following function without
//running this
console.log("hello world");