interface User{
    firstName : string,
    lastName : string,
    age : number,
    email?:string 
}
function isLegal(user: User){
    if(user.age >= 18){
        return true;
    }
    return false;
}
function greet(user:User){
    console.log("hellow"+user.firstName);
}
isLegal({
    firstName: "Insham",
    lastName:"haque",
    age:20
})
greet({
    firstName: "Insham",
    lastName:"haque",
    age:20
})