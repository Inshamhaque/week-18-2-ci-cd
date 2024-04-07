//to calculate 1^n+2^n+3^n upto m
function sqaure(a){
    return a*a;
}
function cube(b){
    return b*b*b;
}
function sum(m,fn){//function being passed as arguement!!!
    let sum = 0;
    for(let i=0;i<m;i++){
        sum += fn(i); 
    }
    return sum;
}
console.log(sum(99,cube));
//anonymous function
