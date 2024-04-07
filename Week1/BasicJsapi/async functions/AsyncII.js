//converting the previous async to normal sync but using busy waiting
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
function sync(){
    for(let i=0;i<1000000000;i++){
        i++;
    }
}
//busy waiting 
sync();
sumtill100();
//setTimeout(sumtill100,1000);// this here acts as a async function since js can run the following function without
//running this
console.log("hello world");