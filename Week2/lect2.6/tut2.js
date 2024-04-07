//backend of a map function
function transform(i){
    return i*2;
}
function map(fn,input){
    var output = [];
    for(let i=0;i<input.length;i++){
        output[i] =  fn(input[i]);
    }
    return output;
}
let input = [1,2,3,4,5];
console.log(map(transform,input));