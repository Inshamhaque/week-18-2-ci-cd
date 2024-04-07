//map => to tranform an array and returns an array 
//given an array, give an array in which each is multiplied by 2 
let input = [1,3,5,7];
let output = input.map((i)=>{
    return i*2;
})
let o2 = input.map(i=>i*2);
console.log(o2);
console.log(output);