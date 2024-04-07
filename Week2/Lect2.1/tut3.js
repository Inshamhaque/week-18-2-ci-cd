//creating our own async function
//Approach 2 -> Using promises

//promisify this async function
// function myowntimeout(fn,duration){
//     setTimeout(fn,duration);
// }
//// myowntimeout(()=>{
//     console.log("hello world");
// },1000);

//Promisified version 
function promisedmyowntimeout(duration){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Hello World");
        },duration);
    });
}
let a = promisedmyowntimeout(1);

console.log(a)
a.then(()=>{
    console.log("promise is resolved successfully and the obtained output is: ");
    console.log(a);
})