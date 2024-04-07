const arr = [1,2,3];
//pushing into the array
arr.push(2);
console.log(arr);
//popping
arr.pop();
console.log(arr);
//pushing from front 
arr.unshift(0);
console.log(arr);
//concatenating two arrays
const arr2 = [4,5,6,7,8];
console.log(arr.concat(arr2));
//ITERATING through the array using a foreach ---> arr.forEach(any function you wish to call) for each char in the array
function double(val){

    console.log(val*2);
}
arr.forEach(double);
//splice method to remove element particular index-> arr.splice(start,count of indices)
console.log(arr2);//to remove one element splice(start,start-1);
arr2.splice(2,1);//removes one element starting from index 2  
console.log(arr2);
//Update the value 
arr2[0] = 3;
console.log(arr2);
//delete entire array
console.log(arr2);
//callbacks, map, filter, find , sort 
