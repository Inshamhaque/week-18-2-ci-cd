//this shows the benefit of promises over normal simple callback sync function 
//normal code using promises and .then 
//in this case hi there is printed early and thus the thread does not awaits at line 13 and thus after 1 second 
//hello world is printed
function Asyncfn(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello World!");
        },1000)
    });
    return p;
}
// function main(){
//     Asyncfn().then(function(value){
//         console.log(value);
//     });
//     console.log("hi there");
// }
// main();

//Let us convert this into Async await
// now the thread awaits at line 23 and the code after it also gets stuck/awaits until Asyncfn() doe not get resolve
//Rather than using .then we use async and await 
async function main(){
    let value = await Asyncfn();
    console.log(value);
    console.log("hi there");
}
main();
//async and await are used on the caller side and not on promise side 
//Every await must be wrapped inside an async function thats the major necessity

//callback syntax -> Promise(then) -> Async/await syntax 