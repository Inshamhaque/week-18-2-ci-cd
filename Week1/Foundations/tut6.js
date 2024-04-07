//Complex primitives 
//Arrays
let array = [1,2,3,4,5,6,7,8];
//print even numbers in an array
// for(let i = 0;i<array.length;i++)
// {
//     if (array[i] % 2 == 0)
//     {
//         console.log(array[i]);
//     }
// }
//program to print biggest number in an array
let largest = array[0];
for(let i=0;i<array.length;i++){
    if(array[i]>largest){
        largest = array[i];
   }
}
console.log("The largest element is: "+largest);