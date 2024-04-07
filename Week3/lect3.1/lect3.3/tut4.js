//Handling errors using try,catch 
let a;//undefined variable
try{
    console.log(a.length());//the control goes to the catch block from here 
    console.log("hi from try block");//this does not gets executed
}
catch(error){
    console.log("hi from the catch block");//this gets logged
}
console.log("hello from outside");//finally, this will also be logged since the error has been dealt off eit 