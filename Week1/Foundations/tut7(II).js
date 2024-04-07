//Functions can call functions (Callback functions)
//A function that is passed as an argument to another function.
function arithmetic(num1, num2, fntocall){
    return fntocall(num1,num2);
}
function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
const ans = arithmetic(3,4,sum);
console.log(ans);