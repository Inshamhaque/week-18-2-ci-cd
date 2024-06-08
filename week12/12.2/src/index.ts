interface user{
    name : string,
    age : number
}
function sumofAge(user1:user,user2:user){
    return user1.age+user2.age;
}
const age = sumofAge({name:'insham',age:19},{name:'insham2',age:20});
console.log(age);