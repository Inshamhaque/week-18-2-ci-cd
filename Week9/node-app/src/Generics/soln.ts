//to return the first element 
function firstEl<T>(arr:T[]){
    return arr[0];
}
let o1 = firstEl<string>(["insham","haque"]);
let o2 = firstEl<number>([10,11]);
let o3 = firstEl<boolean>([true,false]);
console.log(o1.toUpperCase());
