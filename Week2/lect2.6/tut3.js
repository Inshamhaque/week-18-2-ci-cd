//filter function -> takes array as in input and return in boolean format 
//given an array, give bck all even number from it
let input = [1,2,3,4,5];
const ans = input.filter((i)=>{
    if(i%2==0){
        return i;//you can return the element as well since it will be treated as high only!!!
    }
    else{
        return 0;
    }
});
console.log(ans);