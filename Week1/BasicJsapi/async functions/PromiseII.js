//PROMISE -> PENDING, RESOLVED  
//this codebase shows that promise is just like a date() CLASS and thus, can be called globally
//the only prerequisite is that it requieres a resolve function and nothing which should be declared inline 
//and the resolve(anything) actually is a kind of return statement for promise function. 
//in this resolve("foo") returns the value of d as foo after a time delay of 1 sec thus the first console function 
//prints Promise<pending> and then after a second d gets the value of promise<"foo">
//this also uses callbacks under the hood.
var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
        console.log("this is nested callback");
        callback();
    },1000);
});
function callback(){
    console.log(d);
}
console.log(d);
d.then(callback);